import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PRISMA_TOKEN } from 'src/database/constants';
import { PrismaClient, UserRole } from '@intealegend/database';
import { ConfigService } from '@nestjs/config';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PRISMA_TOKEN) private db: PrismaClient,
    private jwtService: JwtService,
    private configService: ConfigService,
    private mailService: MailService,
  ) {}

  private generateTokens(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: '1d', // shorter expiry for access token
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '7d', // longer expiry for refresh token
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async validateUser(identifier: string, password: string) {
    // Try to find user by uniqueIdentifier first
    let user = await this.db.user.findUnique({
      where: { uniqueIdentifier: identifier },
      include: {
        adminProfile: true,
        staffProfile: true,
        sellerProfile: true,
        buyerProfile: true,
      },
    });

    // If not found, try email
    if (!user) {
      user = await this.db.user.findFirst({
        where: { email: identifier, role: UserRole.ADMIN },
        include: {
          adminProfile: true,
          staffProfile: true,
          sellerProfile: true,
          buyerProfile: true,
        },
      });
    }

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // For unverified users, only allow login with email
    if (!user.verified && identifier !== user.email) {
      throw new UnauthorizedException('Account not verified');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async refreshTokens(refreshToken: string) {
    try {
      const payload = await this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const user = await this.db.user.findUnique({
        where: { id: payload.sub },
        include: {
          adminProfile: true,
          staffProfile: true,
          sellerProfile: true,
          buyerProfile: true,
        },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return this.generateTokens(user);
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async login(identifier: string, password: string) {
    const user = await this.validateUser(identifier, password);
    const tokens = this.generateTokens(user);

    if (user.isSuspended) {
      throw new UnauthorizedException(
        'Account Suspended, Please Contact Admin',
      );
    }

    return {
      ...tokens,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        superSeller: user.superSeller,
        uniqueIdentifier: user.uniqueIdentifier,
        verified: user.verified,
        isSuspended: user.isSuspended,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        profile: user.buyerProfile || user.sellerProfile || user.adminProfile,
      },
    };
  }

  async adminLogin(email: string, password: string) {
    const user = await this.validateUser(email, password);

    // Check if user has admin or staff profile
    if (!user.adminProfile && !user.staffProfile) {
      throw new UnauthorizedException('Unauthorized access. Admin only.');
    }

    const tokens = this.generateTokens(user);

    return {
      ...tokens,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        superSeller: user.superSeller,
        uniqueIdentifier: user.uniqueIdentifier,
        verified: user.verified,
        isSuspended: user.isSuspended,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        profile: user.adminProfile,
      },
    };
  }

  async register(data: {
    email: string;
    password: string;
    role: 'SELLER' | 'BUYER';
    profile: any;
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.db.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          role: data.role,
        },
      });

      if (data.role === 'SELLER') {
        const seller = await tx.sellerProfile.create({
          data: {
            ...data.profile,
            userId: user.id,
          },
        });

        await tx.brandMark.create({
          data: {
            name: data.profile.brandName,
            sellerId: seller.id,
            isDefault: true,
          },
        });
      } else {
        await tx.buyerProfile.create({
          data: {
            ...data.profile,
            userId: user.id,
          },
        });
      }

      return user;
    });
  }

  async forgotPassword(identifier: string) {
    // 1. Find user by email or uniqueIdentifier
    const user = await this.db.user.findFirst({
      where: {
        OR: [{ email: identifier }, { uniqueIdentifier: identifier }],
      },
    });
    if (!user) {
      throw new UnauthorizedException('No user found with that identifier');
    }

    // 2. Generate secure token and expiry (1 hour)
    const token = [...Array(48)]
      .map(() => Math.random().toString(36)[2])
      .join('');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

    // 3. Store in PasswordResetToken table (invalidate previous tokens)
    await this.db.passwordResetToken.updateMany({
      where: { identifier, used: false, expiresAt: { gt: new Date() } },
      data: { used: true },
    });
    await this.db.passwordResetToken.create({
      data: {
        token,
        identifier,
        expiresAt,
      },
    });

    // 4. Send email with reset link
    const resetUrl = `${this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000'}/auth/reset-password?token=${token}`;
    await this.mailService.sendPasswordResetLink(user.email, resetUrl);
    return {
      message:
        'Password reset link sent to your email if it exists in our system.',
    };
  }

  async resetPassword(newPassword: string, resetToken: string) {
    // 1. Find token record
    const tokenRecord = await this.db.passwordResetToken.findFirst({
      where: {
        token: resetToken,
        used: false,
        expiresAt: { gt: new Date() },
      },
    });
    if (!tokenRecord) {
      throw new UnauthorizedException('Invalid or expired reset token');
    }

    // 2. Find user
    const user = await this.db.user.findFirst({
      where: {
        OR: [
          { email: tokenRecord.identifier },
          { uniqueIdentifier: tokenRecord.identifier },
        ],
      },
    });
    if (!user) {
      throw new UnauthorizedException('No user found with that identifier');
    }

    // 3. Hash and update password
    const hashed = await bcrypt.hash(newPassword, 10);
    await this.db.user.update({
      where: { id: user.id },
      data: { password: hashed },
    });

    // 4. Mark token as used
    await this.db.passwordResetToken.update({
      where: { id: tokenRecord.id },
      data: { used: true },
    });

    // 5. Send password reset success email
    await this.mailService.sendPasswordResetSuccess(user.email);

    return { message: 'Password has been reset successfully.' };
  }
}

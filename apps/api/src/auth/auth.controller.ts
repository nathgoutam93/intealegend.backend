import {
  Controller,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { contract } from '@intealegend/api-contract';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { StorageService } from '../storage/storage.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { Multer } from 'multer';

const FILE_FIELDS = [
  { name: 'panCard', maxCount: 1 },
  { name: 'gstCertificate', maxCount: 1 },
  { name: 'fssaiLicense', maxCount: 1 },
  { name: 'cancelledCheque', maxCount: 1 },
  { name: 'brandLogo', maxCount: 1 },
  { name: 'brandCertificate', maxCount: 1 },
];

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly storageService: StorageService,
  ) {}

  @TsRestHandler(contract.auth.login)
  async login() {
    return tsRestHandler(
      contract.auth.login,
      async ({ body }: { body: { identifier: string; password: string } }) => {
        try {
          const result = await this.authService.login(
            body.identifier,
            body.password,
          );
          return { status: 200, body: result };
        } catch (error) {
          return {
            status: 401,
            body: {
              message: error.message,
              code: 'UNAUTHORIZED',
              timestamp: new Date().toISOString(),
            },
          };
        }
      },
    );
  }

  @TsRestHandler(contract.auth.register)
  @UseInterceptors(FileFieldsInterceptor(FILE_FIELDS))
  async register(
    @UploadedFiles() files: Record<string, Express.Multer.File[]>,
  ) {
    return tsRestHandler(contract.auth.register, async (args) => {
      try {
        // Parse form data fields
        const formData = args.body;

        // Extract basic auth fields
        const email = formData.email as string;
        const password = formData.password as string;
        const role = formData.role as any;

        // Build profile object from form fields
        const profile = {
          ...(typeof formData['profile'] === 'object' &&
          formData['profile'] !== null
            ? formData['profile']
            : {}),
        };

        if (files) {
          for (const [fieldName, fieldFiles] of Object.entries(files)) {
            if (fieldFiles?.length > 0) {
              const file = fieldFiles[0];
              const url = await this.storageService.upload(
                file.originalname,
                file.buffer,
                fieldName === 'brandLogo', // Only optimize brand logo
              );
              profile[fieldName] = url;
            }
          }
        }

        const user = await this.authService.register({
          email,
          password,
          role,
          profile: profile,
        });

        return { status: 201, body: user };
      } catch (error) {
        console.error('Registration error:', error);
        return {
          status: 400,
          body: {
            message: error.message,
            code: 'REGISTRATION_FAILED',
            timestamp: new Date().toISOString(),
          },
        };
      }
    });
  }

  @TsRestHandler(contract.auth.adminLogin)
  async adminLogin() {
    return tsRestHandler(
      contract.auth.adminLogin,
      async ({ body }: { body: { email: string; password: string } }) => {
        try {
          const result = await this.authService.adminLogin(
            body.email,
            body.password,
          );
          return { status: 200, body: result };
        } catch (error) {
          return {
            status: 401,
            body: {
              message: error.message,
              code: 'UNAUTHORIZED',
              timestamp: new Date().toISOString(),
            },
          };
        }
      },
    );
  }
}

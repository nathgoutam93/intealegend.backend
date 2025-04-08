import { Controller, Req, UseGuards } from '@nestjs/common';
import { contract } from '@intealegend/api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { AdminService } from './admin.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller()
@UseGuards(JwtGuard) // Add this decorator to protect all routes in this controller
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @TsRestHandler(contract.admin)
  handler(@Req() req) {
    if (req.user.role != 'ADMIN') {
      return {
        status: 401,
        body: {
          message: 'Unauthorized',
          code: 'UNAUTHORIZED',
          timestamp: new Date().toISOString(),
        },
      };
    }

    return tsRestHandler(contract.admin, {
      stats: async () => {
        const stats = await this.adminService.getStats();
        return {
          status: 200,
          body: stats,
        };
      },
      listUsers: async ({ query }) => {
        const res = await this.adminService.listUsers(query);

        return {
          status: 200,
          body: res,
        };
      },
      verifyRegistration: async ({ body }) => {
        const res = await this.adminService.verifyRegistrations(body.userIds);

        return {
          status: 200,
          body: res,
        };
      },
    });
  }
}

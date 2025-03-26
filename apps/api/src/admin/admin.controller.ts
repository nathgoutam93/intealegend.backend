import { Controller } from '@nestjs/common';
import { contract } from '@intealegend/api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @TsRestHandler(contract.admin)
  handler() {
    return tsRestHandler(contract.admin, {
      getProfile: async ({ params: { userId } }) => {
        const profile = await this.adminService.getProfile(userId);

        return {
          status: 200,
          body: profile,
        };
      },
      createProfile: async ({ body }) => {
        const profile = await this.adminService.createProfile(body);

        return {
          status: 201,
          body: profile,
        };
      },
      stats: async () => {
        const stats = await this.adminService.getStats();
        return {
          status: 200,
          body: stats,
        };
      },
      // @ts-ignore
      listVerifiedUsers: async ({ query }) => {
        const res = await this.adminService.listVerifiedUsers(query);

        return {
          status: 200,
          body: res,
        };
      },
      //@ts-ignore
      listPendingVerifications: async ({ query }) => {
        const res = await this.adminService.listPendingVerifications(query);

        return {
          status: 200,
          body: res,
        };
      },
      verifyRegistration: async ({ body }) => {
        const res = await this.adminService.verifyRegistration(body.userIds);

        return {
          status: 200,
          body: res,
        };
      },
    });
  }
}

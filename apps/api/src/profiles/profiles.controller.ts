import { Controller } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { contract } from '@intealegend/api-contract';

@Controller()
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @TsRestHandler(contract.admin.getProfile)
  async getAdminProfile({ params }) {
    const profile = await this.profilesService.getAdminProfile(params.userId);
    if (!profile) {
      return {
        status: 404,
        body: {
          message: 'Profile not found',
          code: 'PROFILE_NOT_FOUND',
          timestamp: new Date().toISOString(),
        },
      };
    }
    return { status: 200, body: profile };
  }

  @TsRestHandler(contract.admin.createProfile)
  async createAdminProfile({ body }) {
    const profile = await this.profilesService.createAdminProfile(body);
    return { status: 201, body: profile };
  }

  @TsRestHandler(contract.sellers.getProfile)
  async getSellerProfile({ params }) {
    const profile = await this.profilesService.getSellerProfile(params.userId);
    if (!profile) {
      return {
        status: 404,
        body: {
          message: 'Profile not found',
          code: 'PROFILE_NOT_FOUND',
          timestamp: new Date().toISOString(),
        },
      };
    }
    return { status: 200, body: profile };
  }

  @TsRestHandler(contract.sellers.createProfile)
  async createSellerProfile({ body }) {
    const profile = await this.profilesService.createSellerProfile(body);
    return { status: 201, body: profile };
  }
}

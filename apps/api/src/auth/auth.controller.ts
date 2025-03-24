import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { contract } from '@intealegend/api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @TsRestHandler(contract.auth)
  handler() {
    return tsRestHandler(contract.auth, {
      login: async ({ body }) => {
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

      register: async ({ body }) => {
        try {
          const user = await this.authService.register(body);
          return { status: 201, body: user };
        } catch (error) {
          return {
            status: 400,
            body: {
              message: error.message,
              code: 'REGISTRATION_FAILED',
              timestamp: new Date().toISOString(),
            },
          };
        }
      },

      adminLogin: async ({ body }) => {
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
    });
  }
}

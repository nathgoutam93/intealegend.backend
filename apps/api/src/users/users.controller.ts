import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { contract } from '@intealegend/api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @TsRestHandler(contract.users)
  handler() {
    return tsRestHandler(contract.users, {
      findAll: async ({ query: { role, verified, limit, offset } }) => {
        const { data, total } = await this.usersService.findAll({
          role,
          verified,
          limit,
          offset,
        });

        return {
          status: 200,
          body: {
            limit: Number(limit),
            offset: Number(offset),
            data,
            total,
          },
        };
      },

      findOne: async ({ params: { id } }) => {
        const user = await this.usersService.findOne(Number(id));

        if (!user) {
          return {
            status: 404,
            body: {
              message: 'User not found',
              code: 'USER_NOT_FOUND',
              timestamp: new Date().toISOString(),
            },
          };
        }

        return {
          status: 200,
          body: user,
        };
      },

      create: async ({ body }) => {
        const user = await this.usersService.create({
          email: body.email,
          password: body.password,
          role: body.role,
        });

        return {
          status: 201,
          body: user,
        };
      },

      update: async ({ params: { id }, body }) => {
        const user = await this.usersService.update(Number(id), {
          email: body.email,
          password: body.password,
          role: body.role,
          verified: body.verified,
          uniqueIdentifier: body.uniqueIdentifier,
        });

        if (!user) {
          return {
            status: 404,
            body: {
              message: 'User not found',
              code: 'USER_NOT_FOUND',
              timestamp: new Date().toISOString(),
            },
          };
        }

        return {
          status: 200,
          body: user,
        };
      },

      verify: async ({ params: { id }, body: { uniqueIdentifier } }) => {
        const user = await this.usersService.verify(
          Number(id),
          uniqueIdentifier,
        );

        if (!user) {
          return {
            status: 404,
            body: {
              message: 'User not found',
              code: 'USER_NOT_FOUND',
              timestamp: new Date().toISOString(),
            },
          };
        }

        return {
          status: 200,
          body: user,
        };
      },

      delete: async ({ params: { id } }) => {
        const deleted = await this.usersService.remove(Number(id));

        if (!deleted) {
          return {
            status: 404,
            body: {
              message: 'User not found',
              code: 'USER_NOT_FOUND',
              timestamp: new Date().toISOString(),
            },
          };
        }

        return {
          status: 204,
          body: null,
        };
      },

      //@ts-ignore
      getPendingRegistrations: async () => {
        try {
          const users = await this.usersService.getPendingRegistrations();
          return {
            status: 200,
            body: users,
          };
        } catch (error) {
          return {
            status: 500,
            body: {
              message: 'Failed to fetch pending registrations',
              code: 'INTERNAL_SERVER_ERROR',
              timestamp: new Date().toISOString(),
            },
          };
        }
      },

      verifyRegistration: async ({ body }) => {
        const result = await this.usersService.verifyRegistrations(
          body.userIds,
        );
        return { status: 200, body: result };
      },
    });
  }
}

import { Global, Module } from '@nestjs/common';
import { db } from '@intealegend/database';
import { PRISMA_TOKEN } from './constants';

@Global()
@Module({
  providers: [
    {
      provide: PRISMA_TOKEN,
      useValue: db,
    },
  ],
  exports: [PRISMA_TOKEN],
})
export class DatabaseModule {}

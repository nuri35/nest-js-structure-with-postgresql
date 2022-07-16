import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Global() //this is module global.
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
//db setting
export class PrismaModule extends PrismaClient {
  //
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:mypassword@localhost:5432/postgres?schema=public',
        },
      },
    });
  }
}

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [PrismaService],
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

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(): string {
    return 'ı am signup';
  }

  signin() {
    return 'ı am signin';
  }
}

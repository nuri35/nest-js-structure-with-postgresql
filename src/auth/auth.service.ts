import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dto: AuthDto): string {
    return 'ı am signup';
  }

  signin() {
    return 'ı am signin';
  }
}

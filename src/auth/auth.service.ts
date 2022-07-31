import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    //Promise<User> User interface yaratılabılır
    //register
    try {
      const hash = await argon2.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      delete user.hash;

      return user; //promise<User>
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if ((err.code = 'P2002')) {
          throw new ForbiddenException('Credential taken');
        }
      }
      throw err;
    }
  }

  async signin(dto: AuthDto) {
    //login
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new ForbiddenException('Credential incorrect');
    }

    const pwMatch = await argon2.verify(user.hash, dto.password);

    if (!pwMatch) {
      throw new ForbiddenException('Credential incorrect');
    }
    delete user.hash;
    return user;
  }
}

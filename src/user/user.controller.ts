import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard/index';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    //@GetUser() dedııgmız şeyde decorator aslında switchToHttp().getRequest() istek atarak req dekı userı alıyor onuda  user: User burda user'a atıyor user'ında tipini User entitiysi olarak belırledık zaten
    //User dedıgımız aslında userEntity işte db olarak tanımladıgımız dosya  parametredekı user'a da tip olarak atadık
    return user;
  }

  @Patch()
  editUser() {
    //
  }
}

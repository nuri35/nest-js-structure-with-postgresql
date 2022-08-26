import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard/index';
import { EditUserDto } from './dto/edit-user.dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    //@GetUser() dedııgmız şeyde decorator aslında switchToHttp().getRequest() istek atarak req dekı userı alıyor onuda  user: User burda user'a atıyor user'ında tipini User entitiysi olarak belırledık zaten
    //User dedıgımız aslında userEntity işte db olarak tanımladıgımız dosya  parametredekı user'a da tip olarak atadık
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}

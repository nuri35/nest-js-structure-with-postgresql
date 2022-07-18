import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthControler {
  //   authService: AuthService; // private yaptıgım ıcın gerek yok ve constructor ıcındede yazmama gerek yok
  constructor(private authService: AuthService) {
    //bu sekılde atamalar yapabılrız atanan tür kuralına göre
    // this.authService = 2; calısmaz
    // this.authService = authService; calısır geçerli olan parametre yoladıgımda
    // this.authService = {
    //   test() {
    //     console.log('hell word');
    //   },
    // }; //calısır************* yada  tipi obje ıcınde fonks alıyor zaten this.authService.login(); desende calısıyor videoda gosterdi
    /** */
  }
  @Post('signup')
  signup(@Req() req: Request): string {
    console.log(req);
    return this.authService.signup();
  }
  @Post('signin')
  signin(): string {
    return this.authService.signin();
  }
}

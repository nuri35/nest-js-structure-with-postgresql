import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthControler {
  //   authService: AuthService; // private yaptıgım ıcın gerek yok ve constructor ıcındede yazmama gerek yok
  constructor(private authService: AuthService) {
    //
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
  signup() {
    return 'ı am signup';
  }
  @Post('signin')
  signin() {
    return 'ı am signin';
  }
}

import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

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
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK) //post request genelde 201 yollar onun ıcın OK yanı 200 status yaptık bunları senaryolara baglı olarak kullanawbılrsın
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}

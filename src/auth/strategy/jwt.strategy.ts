import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }
  //super'de zaten this  oncesındede kullanamazsın ıcındede kullanamazsın ııcnde bır deger vercenkı extend ettıgı yerdekı constructorın thıs' kısmına yazıversın onun dısında publıc private yaparak  config: ConfigService kısmını , class ıcınde kullanabılrısın he class ıcınde kulllanmıyorsan mesela sadece super 'de kullancaksın ozman yada constructorda this.name = config.get vs diyerek kullancaksan private publıc gerek yok
  async validate(payload: { sub: number; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });
    delete user.hash;
    return user; // req.user'a burdakı deger gelır
  }
}

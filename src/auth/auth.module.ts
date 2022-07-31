import { Module } from '@nestjs/common';
import { AuthControler } from './auth.controller';
import { AuthService } from './auth.service';
// import { JwtStrategy } from './strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthControler],
  providers: [AuthService],
})
export class AuthModule {}

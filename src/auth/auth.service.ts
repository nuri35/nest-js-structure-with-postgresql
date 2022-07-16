import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup(): string {
    return 'ı am signup';
  }

  signin() {
    return 'ı am signin';
  }
}

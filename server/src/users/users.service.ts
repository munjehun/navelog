import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  join(): string {
    return 'hi';
  }
}

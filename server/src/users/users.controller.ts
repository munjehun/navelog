import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(readonly userService: UsersService) {}
  // join
  //   @Post()
  //   join(@Body() userData): string {
  //     return this.userService.join(userData);
  //   }

  //   @Post()
  //   login(@Body() userData): string {
  //     return this.userService.login(userData);
  //   }
  // login
  // logout
}

import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/CreateUserDto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('사용자 API')
export class UsersController {
  constructor(readonly userService: UsersService) {}

  @Post('/login')
  @ApiOperation({
    summary: '로그인 API',
    description: '사용자 정보를 조회하여 로그인한다.',
  })
  login(@Body() body: CreateUserDto) {
    return this.userService.login(body);
  }

  // login
  // logout
}

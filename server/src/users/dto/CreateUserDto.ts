import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '이메일' })
  email: string;
  @ApiProperty({ description: '닉네임' })
  nickname: string;
  @ApiProperty({ description: '이미지' })
  image: string;
}

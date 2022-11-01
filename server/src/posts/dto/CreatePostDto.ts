import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ description: '제목' })
  title: string;
  @ApiProperty({ description: '본문' })
  body: string;
  @ApiProperty({ description: '작성자 고유 id' })
  userId: number;
  @ApiProperty({ description: '해시태그 목록' })
  hashtags: string[];
}

import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty({ description: '게시글 고유 id' })
  readonly id: number;
  @ApiProperty({ description: '작성자 고유 id' })
  readonly userId: number;
  @ApiProperty({ description: '제목' })
  readonly title: string;
  @ApiProperty({ description: '본문' })
  readonly body: string;
  @ApiProperty({ description: '해시태그 목록' })
  hashtags: string[];
}

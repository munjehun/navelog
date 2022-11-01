import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty({ description: '게시글 고유 id' })
  id: number;
  @Column()
  @ApiProperty({ description: '작성자 고유 id' })
  user_id: number;
  @Column()
  @ApiProperty({ description: '제목' })
  title: string;
  @Column()
  @ApiProperty({ description: '본문' })
  body: string;
  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @ApiProperty({ description: '생성일자' })
  createdAt: Date;
}

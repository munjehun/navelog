import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  user_id: number;
  @Column()
  title: string;
  @Column()
  body: string;
}

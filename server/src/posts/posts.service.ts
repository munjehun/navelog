import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/CreatePostDto';
import { Post } from './entities/post.entity';
import { UpdatePostDto } from './dto/UpdatePostDto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}
  update(body: UpdatePostDto): string {
    throw new Error('Method not implemented.');
  }
  delete(id: string): string {
    throw new Error('Method not implemented.');
  }
  async create(body: CreatePostDto) {
    const newPost: Post = this.postsRepository.create({
      body: body.body,
      title: body.title,
      user_id: body.userId,
    });
    await this.postsRepository.insert(newPost);
  }
  getAll(): string {
    throw new Error('Method not implemented.');
  }
  getOne(id: string): string {
    return id;
  }
}

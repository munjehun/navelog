import { Injectable, NotFoundException } from '@nestjs/common';
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

  async update(id: number, body: UpdatePostDto) {
    const post: Post = await this.postsRepository.findOne({
      where: { id: id, user_id: body.userId },
    });
    if (!post) {
      throw new NotFoundException(`${id} not found`);
    }
    post.body = body.body;
    post.title = body.title;
    return await this.postsRepository.save(post);
  }

  async delete(id: number) {
    await this.postsRepository.delete(id);
  }

  async create(body: CreatePostDto) {
    const newPost: Post = this.postsRepository.create({
      body: body.body,
      title: body.title,
      user_id: body.userId,
    });

    const result = await this.postsRepository.insert(newPost);
    // const newPostId = result.identifiers[0].id;
    //TODO: hashtag 선언
  }

  async getAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async getOne(id: number): Promise<Post> {
    const post: Post = await this.postsRepository.findOne({
      where: { id: id },
    });
    if (!post) {
      throw new NotFoundException(`${id} not found`);
    }
    return post;
  }
}

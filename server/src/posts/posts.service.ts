import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getOne(id: string): string {
    return id;
  }
}

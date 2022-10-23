import { Controller, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('게시글 API')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  // create
  // update
  // readOne
  @Get(':id')
  @ApiOperation({
    summary: '게시글 단건 조회 API',
    description: '게시글을 조회한다.',
  })
  @ApiCreatedResponse({ description: '게시글을 조회한다.', type: Post })
  getOne(@Param('id') id: string): string {
    return this.postService.getOne(id);
  }
  // readAll
  // delete
}

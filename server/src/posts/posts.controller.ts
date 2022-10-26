import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePostDto';
import { UpdatePostDto } from './dto/UpdatePostDto';

@Controller('posts')
@ApiTags('게시글 API')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  @ApiOperation({
    summary: '게시글 전체 조회 API',
    description: '전체 게시글을 조회한다.',
  })
  getAll() {
    return this.postService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '게시글 단건 조회 API',
    description: '게시글을 조회한다.',
  })
  getOne(@Param('id') id: number) {
    return this.postService.getOne(id);
  }

  @Post()
  @ApiOperation({
    summary: '게시글 작성 API',
    description: '게시글을 작성한다.',
  })
  @ApiCreatedResponse({
    description: '새 게시글을 작성한다.',
    type: CreatePostDto,
  })
  @HttpCode(200)
  create(@Body() body: CreatePostDto) {
    return this.postService.create(body);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '게시글 수정 API',
    description: '선택된 게시글을 수정한다.',
  })
  @ApiCreatedResponse({
    description: '선택된 게시글을 수정한다.',
    type: UpdatePostDto,
  })
  @HttpCode(200)
  update(@Param('id') id: number, @Body() body: UpdatePostDto) {
    return this.postService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '게시글 삭제 API',
    description: '선택된 게시글을 삭제한다.',
  })
  @ApiCreatedResponse({
    description: '선택된 게시글을 삭제한다.',
  })
  @HttpCode(200)
  delete(@Param('id') id: number) {
    return this.postService.delete(id);
  }
}

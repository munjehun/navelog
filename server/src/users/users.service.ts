import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async login(body: CreateUserDto) {
    // get user data
    const user: User = await this.usersRepository.findOne({
      where: { email: body.email },
    });
    if (user) {
      // update user image, nickname data;
      user.image = body.image;
      user.nickname = body.nickname;
      await this.usersRepository.save(user);
      return user;
    }
    // create new user
    const newUser: User = this.usersRepository.create({
      email: body.email,
      nickname: body.nickname,
      image: body.image,
    });
    const result = await this.usersRepository.insert(newUser);
    newUser.id = result.identifiers[0].id;
    return newUser;
  }
}

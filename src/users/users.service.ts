import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {User} from "./entities/user.entity";

@Injectable()
export class UsersService {
  private users: User[] = [{id: 1, name: 'test1'}];

  create(createUserInput: CreateUserInput) {
    const id = this.users.at(-1).id + 1
    this.users.push({id, ...createUserInput})
    return createUserInput
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    const targetUser = this.findOne(id);

    targetUser.name = updateUserInput.name;

    return targetUser;
  }

  remove(id: number) {
    const targetUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return targetUser;
  }
}

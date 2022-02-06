import { Injectable } from '@nestjs/common';
import {User} from "./entities/user.entity";
import {PrismaService} from "../prisma/prisma.service";
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
  //
  // create(createUserInput: CreateUserInput) {
  //   const id = this.users.at(-1).id + 1
  //   this.users.push({id, ...createUserInput})
  //   return createUserInput
  // }
  //
  // findAll() {
  //   return this.users;
  // }
  //
  // findOne(id: number) {
  //   return this.users.find((user) => user.id === id);
  // }
  //
  // update(id: number, updateUserInput: UpdateUserInput) {
  //   const targetUser = this.findOne(id);
  //
  //   targetUser.name = updateUserInput.name;
  //
  //   return targetUser;
  // }
  //
  // remove(id: number) {
  //   const targetUser = this.findOne(id);
  //   this.users = this.users.filter((user) => user.id !== id);
  //
  //   return targetUser;
  // }
}

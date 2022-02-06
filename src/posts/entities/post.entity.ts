import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {User as EntityUser} from "../../users/entities/user.entity";

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content?: string;

  @Field(() => User)
  author?: EntityUser;

  @Field(() => Int)
  userId?: number;
}
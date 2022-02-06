import { InputType, Int, Field } from '@nestjs/graphql';
import {User} from "@prisma/client";
import {User as EntityUser} from "../../users/entities/user.entity";

@InputType()
export class CreatePostInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content?: string;

  @Field(() => EntityUser)
  author?: User;
}

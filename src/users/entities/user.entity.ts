import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'user id' })
  id: number;

  @Field(() => String, { description: 'user name' })
  name: string;
}

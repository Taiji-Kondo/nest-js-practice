import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';


@Module({
  imports: [UsersModule,
    GraphQLModule.forRoot({
      // schemaファイルのパスを指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // 生成されたschemaを自動でsortされるためのオプションをオンにする
      sortSchema: true,
    }),],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [UsersModule,
    GraphQLModule.forRoot({
      // schemaファイルのパスを指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // 生成されたschemaを自動でsortされるためのオプションをオンにする
      sortSchema: true,
    }),],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

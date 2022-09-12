import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { OffersModule } from './offers/offers.module';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { ConversionModule } from './conversion/conversion.module';
import { PostbacksModule } from './postbacks/postbacks.module';
import { PostbackTypeModule } from './postbackType/postbackType.module';
dotenv.config();

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.DB,
      autoLoadModels: true,
    }),
    OffersModule,
    ConversionModule,
    PostbacksModule,
    PostbackTypeModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

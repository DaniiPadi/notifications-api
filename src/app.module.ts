import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsModule } from './notifications/notifications.module';
import { Notification } from './notifications/notification.entity';  
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, 
      port: 5432,
      username: 'postgres',
      password: 'MGThTlQzUewsIQNCMeFeoeIUJJmnbVaN',
      database: 'railway',
      entities: [__dirname + `/**/*.entity{.ts,.js}`],
      synchronize: true,
    }),
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

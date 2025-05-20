import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // ← necesario
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { Notification } from './notification.entity'; // ← tu entidad

@Module({
  imports: [TypeOrmModule.forFeature([Notification])], // ← esto es clave
  providers: [NotificationsService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}

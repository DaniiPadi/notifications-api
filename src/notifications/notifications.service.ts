import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

// Importamos las clases del Patrón Strategy
import { NotificationContext } from './notification-context';
import { EmailNotification } from './email-notification.strategy';
import { SMSNotification } from './sms-notification.strategy';
import { PushNotification } from './push-notification.strategy';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) {}

  async sendNotification(message: string, type: string) {
    try {
      const context = new NotificationContext();

      // Selecciona la estrategia según el tipo de notificación
      switch (type) {
        case 'email':
          context.setStrategy(new EmailNotification());
          break;
        case 'sms':
          context.setStrategy(new SMSNotification());
          break;
        case 'push':
          context.setStrategy(new PushNotification());
          break;
        default:
          throw new Error('Tipo de notificación no válido');
      }

      // Ejecuta la estrategia
      context.executeStrategy(message);

      // Guarda la notificación en la base de datos
      const notification = this.notificationRepository.create({ message, type });
      return await this.notificationRepository.save(notification);
    } catch (error) {
      console.error('ERROR EN sendNotification:', error.message);
      throw error;
    }
  }

  async findAll() {
    return this.notificationRepository.find();
  }
}
import { NotificationStrategy } from './notification-strategy.interface';
export class PushNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`Notificación Push enviada: ${message}`);
  }
}
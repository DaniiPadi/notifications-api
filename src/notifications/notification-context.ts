import { NotificationStrategy } from './notification-strategy.interface';

export class NotificationContext {
  private strategy: NotificationStrategy;

  setStrategy(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(message: string) {
    if (!this.strategy) {
      throw new Error('No se ha definido una estrategia de notificación.');
    }
    this.strategy.send(message);
  }
}
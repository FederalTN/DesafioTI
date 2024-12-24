import { PaymentMethod } from '../PaymentMethod.interface';

export class TransbankPayment implements PaymentMethod {
  async processPayment(amount: number, service: string): Promise<string> {
    // Simulamos una API o SDK de Transbank con asincronía....
    await new Promise(resolve => setTimeout(resolve, 1500)); // timeout 1.5 segundos
    // Retornamos un mensaje indicando que se procesó en Transbank
    return `Se ha procesado exitosamente su pago en Transbank.`;
  }
}
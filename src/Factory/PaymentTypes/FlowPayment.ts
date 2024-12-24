import { PaymentMethod } from '../PaymentMethod.interface';

export class FlowPayment implements PaymentMethod {
  async processPayment(amount: number, service: string): Promise<string> {
    // Simulamos una API o SDK de Flow con asincronía...
    await new Promise(resolve => setTimeout(resolve, 1000)); // timeout de 1 segundo
    // Retornamos un mensaje indicando que se procesó en Flow
    return `Se ha procesado exitosamente su pago en Flow.`;
  }
}
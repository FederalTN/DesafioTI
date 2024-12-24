import { PaymentMethod } from './PaymentMethod.interface';
import { FlowPayment } from './PaymentTypes/FlowPayment';
import { TransbankPayment } from './PaymentTypes/TransbankPayment';

export class PaymentFactory {
  // Método Factory que decide qué clase instanciar según el "payment_method"
  public static createPaymentMethod(method: string): PaymentMethod {
    switch (method.toUpperCase()) {
      case 'FLOW':
        return new FlowPayment();
      case 'TRANSBANK':
        return new TransbankPayment();
      default:
        throw new Error(`El método de pago ${method} no está soportado.`);
    }
  }
}
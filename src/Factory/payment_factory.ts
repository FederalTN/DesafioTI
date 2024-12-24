import { payment_processor } from './payment_processor.interface';
import { flow_payment } from './payment_type/flow_payment';
import { transbank_payment } from './payment_type/transbank_payment';

export class payment_factory {
  // Método Factory que decide qué clase instanciar según el "payment_method"
  public static create_payment_processor (method: string): payment_processor {
    switch (method.toUpperCase()) {
      case 'FLOW':
        return new flow_payment();
      case 'TRANSBANK':
        return new transbank_payment();
      default:
        throw new Error(`El método de pago ${method} no está soportado.`);
    }
  }
}
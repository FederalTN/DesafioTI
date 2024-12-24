import { payment_processor } from './payment_processor.interface';
import { flow_payment } from './payment_type/flow_payment';
import { transbank_payment } from './payment_type/transbank_payment';

// Mapeo entre el método de pago y la clase correspondiente
const paymentProcessors: { [key: string]: new () => payment_processor } = {
  'FLOW': flow_payment,
  'TRANSBANK': transbank_payment,
};

export class payment_factory {
  // Método Factory que decide qué clase instanciar según el "payment_method"
  public static create_payment_processor(method: string): payment_processor {
    const processor_class = paymentProcessors[method.toUpperCase()];
    
    if (!processor_class) {
      throw new Error(`El método de pago ${method} no está soportado.`);
    }

    return new processor_class();  // Instancia la clase correspondiente
  }
}
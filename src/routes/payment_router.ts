import { Router, Request, Response } from 'express';
import { payment_factory } from '../factory/payment_factory';

const payment_router = Router();

payment_router.post('/', async (req: Request, res: Response) => {
  try {
    const { payment_method, amount, service } = req.body;
    console.log("Datos recibidos:", payment_method, amount, service);  // Verificar los datos

    const payment_processor = payment_factory.create_payment_processor(payment_method);
    const message = await payment_processor.process_payment(amount, service);
    
    console.log("Mensaje después de procesar el pago:", message);  // Verificar mensaje procesado

    return res.json({ message });
  } catch (error: any) {
    console.error("Error en el proceso de pago:", error);  // Capturar y loguear cualquier error
    return res.status(400).json({ error: error.message });
  }
});

export default payment_router;

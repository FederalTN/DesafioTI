import { Request, Response, NextFunction } from 'express';

export function validate_request(req: Request, res: Response, next: NextFunction) {
  const { payment_method, amount, service } = req.body;

  // Verificar campos obligatorios
  if (!payment_method || !amount || !service) {
    return res.status(400).json({
      error: 'Faltan campos obligatorios en la solicitud (payment_method, amount, service).'
    });
  }

  // Verificar tipos de datos
  if (typeof payment_method !== 'string') {
    return res.status(400).json({
      error: 'El campo payment_method debe ser un string.'
    });
  }

  if (typeof amount !== 'number') {
    return res.status(400).json({
      error: 'El campo amount debe ser un número.'
    });
  }

  if (amount < 0) {
    return res.status(400).json({
      error: 'El campo amount no puede ser negativo.'
    });
  }

  if (typeof service !== 'string' || service.trim().length === 0) {
    return res.status(400).json({
      error: 'El campo service no puede estar vacío ni contener solo espacios.'
    });
  }
  

  // Verificar si son metodos validos (ejemplo, si se espera: FLOW o TRANSBANK)
  const valid_methods = ['FLOW', 'TRANSBANK'];
  if (!valid_methods.includes(payment_method.toUpperCase())) {
    return res.status(400).json({
      error: `El método de pago ${payment_method} no es válido.`
    });
  }
  
  console.log("body validado");

  next();
}
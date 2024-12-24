import express, { Application } from 'express';
import { validate_request } from './middleware/request_validator';
import payment_router from './routes/payment_router';

const app: Application = express();

app.use(express.json());

// Middleware para validar el body en la ruta /pay
app.use('/pay', validate_request, payment_router);

export default app;
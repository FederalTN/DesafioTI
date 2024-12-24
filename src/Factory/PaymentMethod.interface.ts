export interface PaymentMethod {
    processPayment(amount: number, service: string): Promise<string>;
  }
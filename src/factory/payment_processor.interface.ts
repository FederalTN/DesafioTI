export interface payment_processor {
    process_payment(amount: number, service: string): Promise<string>;
  }
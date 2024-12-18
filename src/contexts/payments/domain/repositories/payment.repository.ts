import { Payment } from "../entities/payment";

export abstract class PaymentRepository {
    abstract create(payment: Payment): Promise<void>;
    abstract getById(id: string): Promise<Payment | null>;
}
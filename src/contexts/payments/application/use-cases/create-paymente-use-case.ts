import { Injectable } from '@nestjs/common';
import { Payment, PrimitivePayment } from '../../domain/entities/payment';
import { PaymentRepository } from '../../domain/repositories/payment.repository';
import { CreatePaymentDto } from '../dto/create-payment.dto';

@Injectable()
export class CreatePaymentUseCase {
    constructor (private readonly paymentRepository: PaymentRepository){}

    async execute(createPaymentDto:CreatePaymentDto): Promise<{ payment:PrimitivePayment }> {
        const payment = Payment.create(createPaymentDto);
        await this.paymentRepository.create(payment);
        
        return {
            payment: payment.toValue()
        }
    }
}
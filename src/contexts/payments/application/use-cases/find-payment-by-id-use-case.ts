import { Injectable } from "@nestjs/common";
import { PaymentRepository } from "../../domain/repositories/payment.repository";
import { PaymentNotFoundException } from "../../domain/exceptions/payment-not-found-exception";
import { FindPaymentByIdDto } from "../dto/find-payment-by-id.dto";
import { PrimitivePayment } from "../../domain/entities/payment";

@Injectable()
export class FindPaymentByIdUseCase {
    constructor (private readonly paymentRepository: PaymentRepository){}

    async execute(findPaymentByIdDto: FindPaymentByIdDto): Promise<{ payment: PrimitivePayment }> {
        const payment = await this.paymentRepository.getById(findPaymentByIdDto.id);

        if(!payment) {
            throw new PaymentNotFoundException(findPaymentByIdDto.id);
        }

        return {
            payment: payment.toValue()
        }
    }
}
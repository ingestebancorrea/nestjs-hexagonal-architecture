import { Module } from "@nestjs/common";
import { CreatePaymentUseCase } from "../application/use-cases/create-paymente-use-case";
import { InMemoryPaymentRepository } from './repositories/in-memory.payment-repository';
import { PaymentRepository } from "../domain/repositories/payment.repository";
import { CreatePaymentController } from "./controllers/create-payment/create-payment.controller";
import { FindPaymentByIdController } from "./controllers/find-payment-by-id/find-payment-by-id.controller";
import { FindPaymentByIdUseCase } from "../application/use-cases/find-payment-by-id-use-case";

@Module({
    controllers: [
        CreatePaymentController,
        FindPaymentByIdController
    ],
    providers: [
        CreatePaymentUseCase,
        FindPaymentByIdUseCase,
        InMemoryPaymentRepository,
        {
            provide: PaymentRepository,
            useExisting: InMemoryPaymentRepository
        }
    ],
    exports: [
        CreatePaymentUseCase,
        FindPaymentByIdUseCase
    ]
})

export class PaymentModule {}
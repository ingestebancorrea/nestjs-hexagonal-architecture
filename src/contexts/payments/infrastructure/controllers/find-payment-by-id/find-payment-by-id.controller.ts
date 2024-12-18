import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { FindPaymentByIdUseCase } from "src/contexts/payments/application/use-cases/find-payment-by-id-use-case";
import { PrimitivePayment } from "src/contexts/payments/domain/entities/payment";
import { FindPaymentByIdHttpDto } from "./find-payment-by-id.http.dto";
import { PaymentNotFoundException } from "src/contexts/payments/domain/exceptions/payment-not-found-exception";


@Controller("payments")
export class FindPaymentByIdController {
    constructor(private readonly findPaymentByIdUseCase:FindPaymentByIdUseCase){}

    @Get(":id")
    async run(@Param() params: FindPaymentByIdHttpDto): Promise<{ payment: PrimitivePayment }> {
        try{
            return await this.findPaymentByIdUseCase.execute({
                id: params.id
            });
        } catch(error) {
            if(error instanceof PaymentNotFoundException) {
                throw new NotFoundException(error.message);
            }
            throw error;
        }
    }
}
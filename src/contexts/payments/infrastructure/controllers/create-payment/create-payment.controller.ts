import { Body, Controller, Post } from "@nestjs/common";
import { CreatePaymentUseCase } from "src/contexts/payments/application/use-cases/create-paymente-use-case";
import { CreatePaymentHttpDto } from "./create-paymente.http.dto";
import { PrimitivePayment } from "src/contexts/payments/domain/entities/payment";


@Controller("payments")
export class CreatePaymentController {
    constructor(private createPaymentUseCase: CreatePaymentUseCase){}

    @Post()
    async run(@Body() createPaymentHttpDtto: CreatePaymentHttpDto): Promise<{ payment: PrimitivePayment }>  {
        return await this.createPaymentUseCase.execute({
            amount: createPaymentHttpDtto.amount,
            customerId: createPaymentHttpDtto.customerId
        });
    }
}
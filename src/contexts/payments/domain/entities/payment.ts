import { randomUUID } from "crypto";

export interface PrimitivePayment {
    id: string;
    amount: number;
    customerId: string;
}

export class Payment {

    constructor(private attributes: PrimitivePayment) {}

    static create(createPayment: { 
        amount: number;
        customerId: string;
    }): Payment {
        return new Payment({
            id: randomUUID(),
            amount: createPayment.amount,
            customerId: createPayment.customerId,
        });
    };

    toValue(): PrimitivePayment {
        return {
            id: this.attributes.id,
            amount: this.attributes.amount,
            customerId: this.attributes.customerId
        }
    }

}
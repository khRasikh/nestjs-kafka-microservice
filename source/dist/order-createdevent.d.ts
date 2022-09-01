export declare class OrderCreatedEvent {
    readonly orderId: number;
    readonly userId: number;
    readonly price: number;
    constructor(orderId: number, userId: number, price: number);
    toString(): string;
}

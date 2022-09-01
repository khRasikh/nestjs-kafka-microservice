import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './create-order-req.dto';
export declare class AppService {
    private readonly sourceClient;
    constructor(sourceClient: ClientKafka);
    getHello(): string;
    createOrder({ userId, price }: CreateOrderRequest): import("rxjs").Observable<any>;
    removeOrder(userId: number): import("rxjs").Observable<any>;
    updateOrder(userId: number): import("rxjs").Observable<any>;
    getOrders(): import("rxjs").Observable<any>;
}

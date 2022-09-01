import { AppService } from './app.service';
import { CreateOrderRequest } from './create-order-req.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createOrder(orderRequest: CreateOrderRequest): import("rxjs").Observable<any>;
    removeOrder(userId: number): import("rxjs").Observable<any>;
    updateOrder(userId: number): import("rxjs").Observable<any>;
}

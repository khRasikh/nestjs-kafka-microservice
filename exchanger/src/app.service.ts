import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-order-request.dto';
import { OrderCreatedEvent } from './order-created-event';

@Injectable()
export class AppService {
  constructor(
    @Inject('EXCHANGER_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  // handleOrderCreated(orderedData: OrderCreatedEvent){
  handleOrderCreated({ orderId, userId, price }: OrderCreatedEvent) {
    const info = 'Add in the exchanger microservice app';
    return this.authClient
      .send(
        { cmd: 'order_subscribed' },
        new GetUserRequest(orderId, userId, price, info),
      )
      .subscribe((user) => {
        console.log(`Created Order: ${orderId}`);
      });
  }
}

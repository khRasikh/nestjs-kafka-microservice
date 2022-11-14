import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './create-order-req.dto';
import { OrderCreatedEvent } from './order-createdevent';
import {uid} from 'uid'
import { OrderRemovedEvent } from './order-removed-req';

@Injectable()
export class AppService {
  constructor(
    @Inject('GET_CASH_SERVICE') private readonly sourceClient: ClientKafka //GET_CASH_SERVICE is already registered in App.module.ts
  ){}
  getHello(): string {
    return 'OK';
  }
  createOrder({userId, price}: CreateOrderRequest) {
    console.log(userId+" has been created successfully.")
    const unique_id = Math.floor(Math.random() * 1000)
    return  this.sourceClient.emit('order_created', new OrderCreatedEvent(unique_id, userId, price,)) //{} is payload
  }

  removeOrder(userId: number){
    console.log("user removed: "+userId)
    return this.sourceClient.emit('order_removed', new OrderRemovedEvent(userId,)); 
  }

  updateOrder(userId: number){
    console.log("order has been updated: "+userId)
    return this.sourceClient.emit('order_updated', {updated_id: userId})
  }
  getOrders(){
    // return this.sourceClient.send('order_created', )
    return this.sourceClient.send({ order_created: 'all_orders' }, {});

  }
}

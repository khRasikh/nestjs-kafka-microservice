import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './create-order-req.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //post event
  @Post('api/kafka')
  createOrder(@Body() orderRequest: CreateOrderRequest)  {
    return this.appService.createOrder(orderRequest)
  }

  //delete event
  @Delete('api/kafka/:userId')
  removeOrder(@Param('userId') userId: number){
    return this.appService.removeOrder(userId)
  }

  //update event
  @Patch('api/kafka/:userId')
  updateOrder(@Param('userId') userId: number){
    return this.appService.updateOrder(userId)
  }

  // @Get('api/kafka')
  // getOrders(){
  //   return this.appService.getOrders()
  // }
}

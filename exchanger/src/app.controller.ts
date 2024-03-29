import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('EXCHANGER_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    //  return this.appService.handleOrderCreated(data.value)
    return this.appService.handleOrderCreated(data);
  }
  onModuleInit() {
    this.authClient.subscribeToResponseOf('order_subscribed');
  }
}

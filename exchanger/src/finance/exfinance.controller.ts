import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import {
  ClientKafka,
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';
import { exchangeFinanceService } from './exfinance.service';

@Controller('exchanger')
export class ExchangerFinanceController implements OnModuleInit {
  //constructor
  constructor(
    private readonly exchangeService: exchangeFinanceService,
    @Inject('EXCHANGER_SERVICE') private readonly exchangeClient: ClientKafka,
  ) {}
  //interface which is called once the host module intialized
  onModuleInit() {
    this.exchangeClient.subscribeToResponseOf('finance_list');
    this.exchangeClient.subscribeToResponseOf('finance_user_list');
  }

  //methods
  @EventPattern('finance_list_created')
  handleOrderCreated(data: any) {
    return this.exchangeService.handleRecordCreated(data);
  }

  // @EventPattern({users: 'finance_user_created'})
  @MessagePattern('finance_user_created')
  handleUserCreatedinFinance(data: any) {
    return this.exchangeService.userCreatedinFinanceService(data);
  }
}

import { Controller, Inject } from "@nestjs/common";
import { ClientKafka, EventPattern, MessagePattern } from "@nestjs/microservices";
import { DestinationFinanceService } from "./desfinance.service";

@Controller()
export class DestinationFinanceController{
    //constructor 
    // constructor(
    //     private readonly DestinationService: DestinationFinanceService
    // ){}
    constructor(
        private readonly DestinationService: DestinationFinanceService,
        @Inject('DESTINATION_SERVICE') private readonly DestinationClient: ClientKafka
      ){}

    //methods
    @MessagePattern('finance_list')
    getFinanceList(data: any){
        return this.DestinationService.getFinanceRecievedList(data)
    }

    @MessagePattern('finance_user_created')
    getUsersInFinance(data: any){
        return this.DestinationService.getUserinFinance(data)
    }
    @EventPattern('finance_user_created')
    getUsersAddedInFinance(data: any){
        return "welcome"
    }
}
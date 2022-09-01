import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { CreateFinanceRequest } from "./dto/create-finance-record.dto";
import { uid } from 'uid';
import { CreatedFinanceRecord } from "./interface/created-finance-record";
import { addUserRequestInFinance } from "./dto/add-user-request-finance.dto";
import { CreatedUserInFinance } from "./interface/created-user-in-finance";


@Injectable()
export class FinanceService{

    constructor(
        @Inject('GET_CASH_SERVICE') private readonly financeClient: ClientKafka
      ){}

    createFinance({unique_id, source_full_name, destination_full_name, bank_name, currency, amount, transfer_id}: CreateFinanceRequest){
        const autoGenerateId = uid(); 
        console.log(`A new finance record with ID#${unique_id} has been added successfully.`)
        return  this.financeClient.emit("finance_list_created", new CreatedFinanceRecord(autoGenerateId, unique_id, source_full_name, destination_full_name, bank_name, transfer_id, amount, currency))
    }

    createMobleService({id, name, phone, payment, date}: addUserRequestInFinance){
        return this.financeClient.emit('finance_user_created', new CreatedUserInFinance(id, name, phone, payment, date) )
    }
}
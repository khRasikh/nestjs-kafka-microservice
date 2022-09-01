import { ClientKafka } from "@nestjs/microservices";
import { CreateFinanceRequest } from "./dto/create-finance-record.dto";
import { addUserRequestInFinance } from "./dto/add-user-request-finance.dto";
export declare class FinanceService {
    private readonly financeClient;
    constructor(financeClient: ClientKafka);
    createFinance({ unique_id, source_full_name, destination_full_name, bank_name, currency, amount, transfer_id }: CreateFinanceRequest): import("rxjs").Observable<any>;
    createMobleService({ id, name, phone, payment, date }: addUserRequestInFinance): import("rxjs").Observable<any>;
}

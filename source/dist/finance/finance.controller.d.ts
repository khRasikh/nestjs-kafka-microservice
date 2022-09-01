import { addUserRequestInFinance } from "./dto/add-user-request-finance.dto";
import { CreateFinanceRequest } from "./dto/create-finance-record.dto";
import { FinanceService } from "./finance.service";
export declare class FinanceController {
    private readonly getService;
    constructor(getService: FinanceService);
    createFinanceRecord(postData: CreateFinanceRequest): import("rxjs").Observable<any>;
    createUser(addUserData: addUserRequestInFinance): import("rxjs").Observable<any>;
}

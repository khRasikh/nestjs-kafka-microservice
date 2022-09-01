import { Body, Controller, Get, Post } from "@nestjs/common";
import { addUserRequestInFinance } from "./dto/add-user-request-finance.dto";
import { CreateFinanceRequest } from "./dto/create-finance-record.dto";
import { FinanceService } from "./finance.service";

@Controller('finance')
export class FinanceController{
    constructor(private readonly getService: FinanceService) {}

    @Post('create')
    createFinanceRecord(@Body() postData: CreateFinanceRequest){
        // return this.getService.createFinance(postData)
        return this.getService.createFinance(postData)
    }
    @Post('addUser')
    createUser(@Body() addUserData: addUserRequestInFinance){
        return this.getService.createMobleService(addUserData); 
    }
}
import { Injectable } from '@nestjs/common';
import { GetFinanceListRequest } from './dto/finance-list-request.dto';
import { GetUsersInFinanceRequest } from './dto/user-list-in-finance.dto';

@Injectable()
export class DestinationFinanceService {
  private readonly users: any[] = [
    {
      userId: '106',
      amount: 250,
    },
    {
      userId: '105',
      amount: 200,
    },
  ];

  getFinanceRecievedList(getFinanceRequest: GetFinanceListRequest) {
    //dto
    console.log('Recieved amount: €' + getFinanceRequest.amount);
    return this.users.find(
      (user) => user.userId === getFinanceRequest.unique_id,
    );
  }

  getUserinFinance({ id, name }: GetUsersInFinanceRequest) {
    console.log('New User message: ' + id + name);
  }
}

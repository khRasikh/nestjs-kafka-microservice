import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreatedFinanceRequest } from './dto/get-finance-list.dto';
import { AddedUserInFinance } from './dto/get-user-in-finance.dto';
import { CreatedFinanceRecord } from './interfance/created-finance-event';
import { CreatedUserInFinance } from './interfance/created-user-in-finance';

@Injectable()
export class exchangeFinanceService {
  //constructor
  constructor(
    @Inject('EXCHANGER_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  //methods
  // handleRecordCreated(createdData: CreatedFinanceRecord){
  handleRecordCreated({
    createdId,
    unique_id,
    source_full_name,
    destination_full_name,
    amount,
    currency,
  }: CreatedFinanceRecord) {
    // console.log("Exchange Finance Record has been created successfully", currency+" "+ amount)
    const recievedDate = new Date();
    return this.authClient
      .send(
        'finance_list',
        new CreatedFinanceRequest(
          createdId,
          unique_id,
          source_full_name,
          destination_full_name,
          amount,
          currency,
          `${recievedDate}`,
        ),
      )
      .subscribe((user) => {
        console.log(
          `Charged €${amount * 0.05} out of €$${amount} by Exchanger officer.`,
          // `Billing user with stripe ID ${user.stripeUserId} a price of $${createdData.price}...`,
        );
      });
  }

  userCreatedinFinanceService({ id, name }: CreatedUserInFinance) {
    const getDate = new Date().toLocaleString();
    console.log('added user:' + name);
    return this.authClient.send(
      'finance_user_list',
      new AddedUserInFinance(id, name, `${getDate}`),
    );
  }
}

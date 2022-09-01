import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '102',
      stripeUserId: '43234',
    },
    {
      userId: '103',
      stripeUserId: '27279',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }
 
  getUserData(getUserRequest: GetUserRequest) {
    console.log(`Added ID#: ${getUserRequest.userId}`)
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}

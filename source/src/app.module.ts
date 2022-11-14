import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinanceController } from './finance/finance.controller';
import { FinanceService } from './finance/finance.service'; 
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GET_CASH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'source',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'source-consumer'
          }
        }
      },
    ]),
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs'),
    ConfigModule.forRoot({
      isGlobal: true
    })
  ], 
  controllers: [AppController, FinanceController, ],
  providers: [AppService, FinanceService, ],
})
export class AppModule {}

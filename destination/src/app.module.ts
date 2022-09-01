import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationFinanceController } from './finance/desfinance.controller';
import { DestinationFinanceService } from './finance/desfinance.service'; 

@Module({
  imports: [
    ClientsModule.register([
    {
      name: 'DESTINATION_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'destination',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'destination-consumer'
        }
      }
    },
  ]), 
  
  ],
  controllers: [AppController, DestinationFinanceController],
  providers: [AppService, DestinationFinanceService],
})
export class AppModule {}

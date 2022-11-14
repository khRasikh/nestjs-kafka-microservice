import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangerFinanceController } from './finance/exfinance.controller';
import { exchangeFinanceService } from './finance/exfinance.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EXCHANGER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'exchanger',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'exchanger-consumer',
          },
        },
      },
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, ExchangerFinanceController],
  providers: [AppService, exchangeFinanceService],
})
export class AppModule {}

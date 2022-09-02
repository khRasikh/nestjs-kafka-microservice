import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UserVadlidationMiddleware } from './middleware/user-validation';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService] //@Global() & exports cause to use userService in all parts of app.
})
export class UserModule implements NestModule{
  //implement middlware 
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserVadlidationMiddleware).forRoutes(
      {
        path: 'user',
        method: RequestMethod.GET
      },
      {
        path: 'user',
        method: RequestMethod.POST
      }
    )
  }
  
}

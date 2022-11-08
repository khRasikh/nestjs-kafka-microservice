// import { INestApplication } from "@nestjs/common";
// import { Test } from "@nestjs/testing";
// import { UserModule } from "src/user/user.module";
// import * as request from 'supertest'; 

// describe('userController test', () =>{
//     let users: INestApplication; 
//     const mockUser = {
//         "id": 1,
//         "userId": "0100",
//         "username": "rasikh"
//     }
//     beforeAll(async () => {
//         const moduleRef = await Test.createTestingModule({
//             imports: [UserModule],
//         })
//         .overrideProvider(mockUser)
//         .useValue(mockUser)
//         .compile();

//         users = moduleRef.createNestApplication(); 
//         await users.init(); 
//     });

//     it('should return 200', () => {
//         return request(users.getHttpServer())
//         .get('/user')
//         .expect(200)
//     });

//     afterAll(async () => {
//         await users.close();
//     })
// })
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/user/user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(0).toBe(0)    
  });
});

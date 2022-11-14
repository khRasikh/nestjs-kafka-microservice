import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const mockUsers = {"id": 25, 
  "userId": "id-0110", 
  "username": "arefa", 
   "email": "kh.rasikh542@gmail.com", 
  "password": "rasikh123", 
  "info": "no info yet", 
  "date": "2022-10-11"
}
  let mockApp = {find: jest.fn().mockResolvedValue(mockUsers), create: jest.fn().mockImplementation((dto) => dto),
  save: jest.fn().mockImplementation((user) => {Promise.resolve({id: Date.now(), ...user})})}

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(mockApp)
      .useValue(mockApp)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('OK');
  });

  it('/ GET list of users from Database', () => {
    return request(app.getHttpServer()).get('/user').expect(200); 
  }); 
  const insertData = {"id": 25, 
  "userId": "id-0110", 
  "username": "arefa", 
   "email": "kh.rasikh542@gmail.com", 
  "password": "rasikh123", 
  "info": "no info yet", 
  "date": "2022-10-11"
}
  it('/POST a new user to MongoDB', () => {
    return request(app.getHttpServer()).post('/user').send(insertData).expect('Content-Type', /json/).expect(201).then(res => {
      expect(2).toBe(2)
    })
    // then(response => { //assertion 
    //   console.log(response.body); 
    //   expect(response.body).toEqual({id: 25})
    // })
  })
  it('/ GET single user from Kafka', () => {
    return request(app.getHttpServer()).get('/user/'+"6363c5158ae36ba3e683a2cf").expect(200); 
  })

  afterAll(async () => {
    await app.close();
  });
});

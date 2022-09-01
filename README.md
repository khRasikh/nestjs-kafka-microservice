# nestjs-kafka-microservice-app 

In this project, I have created three separate microservice applications which
performs different operations. The main purpose of its development is to get to know how
microservices applications work.

## Run

Before running the apps, make sure you have installed Docker and Kafka in your Machine/Computer. Then, run every app separately:

- `npm run start`
- `npm run start:dev`

There are more commands you can see in the `package.json` files.

## Requests

A very basic `POST` request avialable and working at the moment which is:

`curl --location --request POST 'http://127.0.0.1:3000/api/kafka' --data-raw '{"userId": 207, "price": 2611 }'`

MongoDB Routes in Source APP:

- get all Users
  `curl --location --request GET 'http://127.0.0.1:3000/user' --header 'Content-Type: application/json' `

- Get singel User
  `curl --location --request GET 'http://127.0.0.1:3000/user/630670ae9d65af942350b3d8' --header 'Content-Type: application/json' `

- Upadte User
  `curl --location --request PATCH 'http://127.0.0.1:3000/user/630670ae9d65af942350b3d8' --header 'Content-Type: application/json' --data-raw '{"id": 102, "userId": "abc-101", "username": "rasikh123", "email": "kh.rasikh542@gmail.com", "password": "rasikh123", "info": "for testing purposes only", "date": "2022-02-12"}'`

- Delete User
  `curl --location --request DELETE 'http://127.0.0.1:3000/user/630670ae9d65af942350b3d8' --header 'Content-Type: application/json'`

Then you must see the live changes in your microapps:

1. The first app `source` deals with creating APIs, keeping list of created APIs, generating data.
2. The second app `exchanger` deals with charging data, sending data, keeping sent data, editing data.
3. The last app `destination` display accessed/recieved data, keeping data, and completing the circle.

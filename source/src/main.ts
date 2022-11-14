import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'log'],
  });

  app.enableCors();
  const configService = app.get<ConfigService>(ConfigService);
  const config = new DocumentBuilder()
    .setTitle("Source Microservice")
    .setDescription("Source Microservice APIs for practice purpose only.")
    .setVersion("1.0")
    .addTag("Source Microservice")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
  await app.listen(configService.get<string>('PORT'));
}
bootstrap();

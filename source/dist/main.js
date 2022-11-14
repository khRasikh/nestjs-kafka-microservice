"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'log'],
    });
    app.enableCors();
    const configService = app.get(config_1.ConfigService);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Source Microservice")
        .setDescription("Source Microservice APIs for practice purpose only.")
        .setVersion("1.0")
        .addTag("Source Microservice")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("docs", app, document);
    await app.listen(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map
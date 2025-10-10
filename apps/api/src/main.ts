import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateOpenApi } from '@ts-rest/open-api';
import { SwaggerModule } from '@nestjs/swagger';
import { contract } from '@intealegend/api-contract';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const document = generateOpenApi(contract, {
    info: {
      title: 'Interlegend API',
      version: '1.0.0',
    },
  });

  SwaggerModule.setup('api-docs', app, document);

  // app.setGlobalPrefix('/api');

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();

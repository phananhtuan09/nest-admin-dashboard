import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import setupSwagger from '~/common/utils/setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const { port, globalPrefix, baseUrl } = configService.get('app');

  app.setGlobalPrefix(globalPrefix);
  setupSwagger(app, configService);
  await app.listen(port, () => {
    console.log(`Server running on ${baseUrl}:${port}`);
  });
}
bootstrap();

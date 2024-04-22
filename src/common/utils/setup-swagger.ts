import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { API_SECURITY_AUTH } from '~/common/decorators/swagger.decorator';
import { ConfigKeyPaths } from '~/configs/index';
import { ISwaggerConfig } from '~/configs/swagger.config';
import { IAppConfig } from '~/configs/app.config';

const setupSwagger = (
  app: INestApplication,
  configService: ConfigService<ConfigKeyPaths>,
) => {
  const { name, port } = configService.get<IAppConfig>('app')!;
  const { enable, path, version } =
    configService.get<ISwaggerConfig>('swagger')!;

  if (!enable) return;

  const documentBuilder = new DocumentBuilder()
    .setTitle(name)
    .setDescription(`${name} API document`)
    .setVersion(version);

  // auth security
  documentBuilder.addSecurity(API_SECURITY_AUTH, {
    description: 'Enter the token',
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  });

  const document = SwaggerModule.createDocument(app, documentBuilder.build(), {
    ignoreGlobalPrefix: false,
    extraModels: [],
  });

  SwaggerModule.setup(path, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  // started log
  console.log(`Document running on http://localhost:${port}/${path}`);
};

export default setupSwagger;

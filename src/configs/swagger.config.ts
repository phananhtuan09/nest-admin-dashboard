import { ConfigType, registerAs } from '@nestjs/config';

import { getEnvValue } from '~/utils/env.util';

export const swaggerRegToken = 'swagger';

export const swaggerConfig = registerAs(swaggerRegToken, () => ({
  enable: getEnvValue<boolean>('SWAGGER_ENABLE', true),
  path: getEnvValue<string>('SWAGGER_PATH', 'swagger'),
  version: getEnvValue<string>('SWAGGER_VERSION', '1.0'),
}));

export type ISwaggerConfig = ConfigType<typeof swaggerConfig>;

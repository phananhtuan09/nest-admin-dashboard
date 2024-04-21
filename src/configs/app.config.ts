import { ConfigType, registerAs } from '@nestjs/config';
import { getEnvValue } from '~/utils/env.util';

const appRegToken = 'app';

const appConfig = registerAs(appRegToken, () => ({
  name: getEnvValue('APP_NAME'),
  port: getEnvValue('APP_PORT', 3000),
  baseUrl: getEnvValue('APP_BASE_URL'),
  globalPrefix: getEnvValue('GLOBAL_PREFIX', 'api'),
}));

type IAppConfig = ConfigType<typeof appConfig>;

export { appRegToken, appConfig, IAppConfig };

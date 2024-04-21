import { appConfig, appRegToken, IAppConfig } from './app.config';
import {
  ISwaggerConfig,
  swaggerConfig,
  swaggerRegToken,
} from './swagger.config';
import { RecordNamePaths } from '~/types/utils.type';

export interface AllConfigType {
  [appRegToken]: IAppConfig;
  [swaggerRegToken]: ISwaggerConfig;
}

export default {
  appConfig,
  swaggerConfig,
};

export type ConfigKeyPaths = RecordNamePaths<AllConfigType>;

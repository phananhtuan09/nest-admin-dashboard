import { appConfig, appRegToken, IAppConfig } from './app.config';
import {
  ISwaggerConfig,
  swaggerConfig,
  swaggerRegToken,
} from './swagger.config';
import { RecordNamePaths } from '~/common/types/utils.type';
import { databaseConfig, IDatabaseConfig, dbRegToken } from './database.config';
export interface AllConfigType {
  [appRegToken]: IAppConfig;
  [swaggerRegToken]: ISwaggerConfig;
  [dbRegToken]: IDatabaseConfig;
}

export default {
  appConfig,
  swaggerConfig,
  databaseConfig,
};

export type ConfigKeyPaths = RecordNamePaths<AllConfigType>;

import { ConfigType, registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { getEnvValue } from '~/common/utils/helper';

// 当前通过 npm scripts 执行的命令
const currentScript = process.env.npm_lifecycle_event;

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: getEnvValue<string>('DB_HOST', '127.0.0.1'),
  port: getEnvValue<number>('DB_PORT', 3306),
  username: getEnvValue<string>('DB_USERNAME'),
  password: getEnvValue<string>('DB_PASSWORD'),
  database: getEnvValue<string>('DB_DATABASE'),
  synchronize: getEnvValue<boolean>('DB_SYNCHRONIZE', false),
  multipleStatements: currentScript === 'typeorm',
  entities: ['dist/modules/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  subscribers: ['dist/modules/**/*.subscriber{.ts,.js}'],
};
export const dbRegToken = 'database';

export const databaseConfig = registerAs(
  dbRegToken,
  (): DataSourceOptions => dataSourceOptions,
);

export type IDatabaseConfig = ConfigType<typeof databaseConfig>;

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;

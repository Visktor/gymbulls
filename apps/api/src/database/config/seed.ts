import { appEnv } from '../../config/env';
import { DataSource } from 'typeorm';

const seedDataSource = new DataSource({
  type: 'postgres',
  host: appEnv.DB_HOST,
  port: appEnv.DB_PORT,
  username: appEnv.DB_USER,
  password: appEnv.DB_PASSWORD,
  database: appEnv.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../seeds/*{.ts,.js}'],
  synchronize: true,
});

export default seedDataSource;

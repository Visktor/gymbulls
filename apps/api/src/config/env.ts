import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  PORT: z.coerce.number(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
});

export function validate(config: Record<string, unknown>) {
  return envSchema.parse(config);
}

export type EnvConfig = z.infer<typeof envSchema>;

const rawEnv = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
};

export const appEnv = validate(rawEnv);

// This is unfortunately necessary since there's no way to read NestJS's config
// module when executing the typeorm migration scripts, so we create an env that
// is globally available and can be imported from anywhere.

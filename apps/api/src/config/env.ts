import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number(),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
});

export function validate(config: Record<string, unknown>) {
  return envSchema.parse(config);
}

export type EnvConfig = z.infer<typeof envSchema>;

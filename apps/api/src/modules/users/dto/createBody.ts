import { z } from 'zod';

export const createUserBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role_id: z.number(),
});

export type CreateUserBody = z.infer<typeof createUserBodySchema>;

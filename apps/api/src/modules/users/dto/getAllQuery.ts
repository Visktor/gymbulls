import { z } from 'zod';

export const getAllUsersQuerySchema = z.object({
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().max(1000).optional().default(500),
});

export type GetAllUsersQuery = z.infer<typeof getAllUsersQuerySchema>;

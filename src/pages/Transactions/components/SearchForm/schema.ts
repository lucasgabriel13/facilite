import * as z from 'zod';

export const searchFormSchema = z.object({
  query: z.string(),
});

export type SearchFormSchemaType = z.infer<typeof searchFormSchema>;

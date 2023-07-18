import * as z from 'zod';

export const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

export type NewTransactionFormType = z.infer<typeof newTransactionFormSchema>;

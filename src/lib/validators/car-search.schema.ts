import { z } from 'zod'

export const carSearchSchema = z.object({
	brand: z.string().optional(),

	fuel: z
		.union([z.string(), z.array(z.string())])
		.optional()
		.transform(v => (Array.isArray(v) ? v : v ? [v] : undefined)),

	minPrice: z.coerce.number().optional(),
	maxPrice: z.coerce.number().optional(),

	q: z.string().optional()
})

export type CarFilters = z.infer<typeof carSearchSchema>

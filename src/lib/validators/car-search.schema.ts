import { z } from 'zod'

export const fuelTypes = ['ELECTRIC', 'HYBRID', 'GASOLINE', 'DIESEL'] as const

export const carSearchSchema = z.object({
	q: z.string().optional(),
	brand: z.string().min(1).optional(),
	fuel: z.union([z.enum(fuelTypes), z.array(z.enum(fuelTypes))]).optional(),
	minPrice: z.coerce.number().int().positive().optional(),
	maxPrice: z.coerce.number().int().positive().optional()
})

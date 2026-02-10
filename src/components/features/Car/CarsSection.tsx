import { CarList } from './CarList'
import { prisma } from '@/src/lib/prisma'
import { CarFilters } from '@/src/lib/validators/car-search.schema'

export async function CarsSection({
	filters
}: {
	filters: Partial<CarFilters>
}) {
	const cars = await prisma.car.findMany({
		where: {
			brand: filters.brand,
			fuelType: filters.fuel ? { in: filters.fuel } : undefined,
			model: filters.q ? { contains: filters.q } : undefined,
			pricePerMonth:
				filters.minPrice || filters.maxPrice
					? { gte: filters.minPrice, lte: filters.maxPrice }
					: undefined
		},
		orderBy: { createdAt: 'desc' }
	})

	return <CarList cars={cars} />
}

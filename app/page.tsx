import { prisma } from '@/src/lib/prisma'
import { CarList } from '@/src/components/features/Car/CarList'
import { SearchBar } from '@/src/components/features/search/SearchBar'
import { SidebarFilters } from '@/src/components/features/filters/SidebarFilters'
import { carSearchSchema } from '@/src/lib/validators/car-search.schema'
import type { z } from 'zod'

type Props = {
	searchParams: Record<string, string | string[] | undefined>
}

type Filters = z.infer<typeof carSearchSchema>

export default async function CarCatalog({ searchParams }: Props) {
	const params = await searchParams
	const parsed = carSearchSchema.safeParse(params)

	const filters: Partial<Filters> = parsed.success ? parsed.data : {}

	const brands = await prisma.car.findMany({
		distinct: ['brand'],
		select: { brand: true },
		orderBy: { brand: 'asc' }
	})

	const cars = await prisma.car.findMany({
		where: {
			brand: filters.brand,
			fuelType: filters.fuel ? { in: filters.fuel } : undefined,
			model: filters.q ? { contains: filters.q } : undefined,
			pricePerMonth:
				filters.minPrice || filters.maxPrice
					? {
							gte: filters.minPrice,
							lte: filters.maxPrice
						}
					: undefined
		},
		orderBy: { createdAt: 'desc' }
	})

	return (
		<div className=' flex gap-6 '>
			<SidebarFilters brands={brands.map(b => b.brand)} />

			<section className='flex-1 py-8'>
				<div className='flex items-center justify-between mb-6'>
					<h1 className='text-3xl font-bold'>Available Cars</h1>
					<SearchBar />
				</div>

				<CarList cars={cars} />
			</section>
		</div>
	)
}

import { prisma } from '@/src/lib/prisma'
import { CarList } from '@/src/components/features/Car/CarList'
import { carSearchSchema } from '@/src/lib/validators/car-search.schema'
import { SearchBar } from '@/src/components/features/search/SearchBar'

type Props = {
	searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function CarCatalog({ searchParams }: Props) {
	const params = await searchParams

	const parsed = carSearchSchema.safeParse(params)
	const filters = parsed.success ? parsed.data : {}

	const fuelArray = Array.isArray(filters.fuel)
		? filters.fuel
		: filters.fuel
			? [filters.fuel]
			: undefined

	const cars = await prisma.car.findMany({
		where: {
			brand: filters.brand,
			fuelType: fuelArray ? { in: fuelArray } : undefined,
			pricePerMonth: {
				gte: filters.minPrice,
				lte: filters.maxPrice
			},
			model: filters.q ? { contains: filters.q } : undefined
		},
		orderBy: { createdAt: 'desc' }
	})

	return (
		<>
			<aside className='space-y-6'>{/* Тут я добавлю фільтри */}</aside>
			<section className='py-8'>
				<div className='flex items-center justify-between mb-6'>
					<h1 className='text-3xl font-bold '>Available Cars</h1>
					<SearchBar />
				</div>
				<CarList cars={cars} />
			</section>
		</>
	)
}

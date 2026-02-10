import { prisma } from '@/src/lib/prisma'
import { CarsSection } from '@/src/components/features/Car/CarsSection'
import { SearchBar } from '@/src/components/features/search/SearchBar'
import { SidebarFilters } from '@/src/components/features/filters/SidebarFilters'
import { carSearchSchema } from '@/src/lib/validators/car-search.schema'
import { CarGridSkeleton } from '@/src/components/features/Car/CarGridSkeleton'
import { CarFilters } from '@/src/lib/validators/car-search.schema'
import { Suspense } from 'react'

type Props = {
	searchParams: Record<string, string | string[] | undefined>
}

export default async function CarCatalog({ searchParams }: Props) {
	const params = await searchParams
	const parsed = carSearchSchema.safeParse(params)

	const filters: Partial<CarFilters> = parsed.success ? parsed.data : {}

	const brands = await prisma.car.findMany({
		distinct: ['brand'],
		select: { brand: true },
		orderBy: { brand: 'asc' }
	})

	return (
		<div className=' flex gap-6 '>
			<SidebarFilters brands={brands.map(b => b.brand)} />

			<section className='flex-1 py-8'>
				<div className='flex items-center justify-between mb-6'>
					<h1 className='text-3xl font-bold'>Available Cars</h1>
					<SearchBar />
				</div>

				<Suspense
					key={JSON.stringify(filters)}
					fallback={<CarGridSkeleton count={15} />}
				>
					<CarsSection filters={filters} />
				</Suspense>
			</section>
		</div>
	)
}

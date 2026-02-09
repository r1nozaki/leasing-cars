import { BrandFilter } from './BrandFilter'
import { FuelFilter } from './FuelFilter'
import { PriceFilter } from './PriceFilter'
import { ResetFilters } from './ResetFilters'

type Props = {
	brands: string[]
}

export function SidebarFilters({ brands }: Props) {
	return (
		<aside className='w-full md:w-1/4 '>
			<div className='sticky top-28 space-y-6 h-fit'>
				<BrandFilter brands={brands} />
				<PriceFilter />
				<FuelFilter />
				<ResetFilters />
			</div>
		</aside>
	)
}

import { CarCardSkeleton } from './CarCardSkeleton'

export function CarGridSkeleton({ count = 10 }: { count?: number }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
			{Array.from({ length: count }).map((item, i) => (
				<CarCardSkeleton key={i} />
			))}
		</div>
	)
}

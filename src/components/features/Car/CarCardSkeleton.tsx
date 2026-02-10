import { Skeleton } from '../../ui/Skeleton'

export function CarCardSkeleton() {
	return (
		<div className='rounded-lg shadow-lg'>
			<Skeleton className='h-73 w-full' />

			<div className='p-4 space-y-3'>
				<Skeleton className='h-4 w-3/4' />
				<Skeleton className='h-4 w-1/2' />
				<Skeleton className='h-6 w-1/3' />
				<Skeleton className='h-2 w-1/3' />
			</div>
		</div>
	)
}

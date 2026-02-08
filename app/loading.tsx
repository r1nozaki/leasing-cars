import { Car } from 'lucide-react'

export default function Loading() {
	return (
		<div className='flex items-center justify-center min-h-screen animate-pulse'>
			<Car size={100} />
		</div>
	)
}

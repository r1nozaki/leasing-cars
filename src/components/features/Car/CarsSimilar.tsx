import type { Car } from '@prisma/client'
import { CarCard } from './CarCard'

export function CarsSimilar({ cars }: { cars: Car[] }) {
	if (cars.length === 0) return null

	return (
		<section className='border-t pt-10 mb-10'>
			<h2 className='text-2xl font-bold mb-8'>Similar Cars</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{cars.map(car => (
					<CarCard
						key={car.id}
						car={car}
					/>
				))}
			</div>
		</section>
	)
}

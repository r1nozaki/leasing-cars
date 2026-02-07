import type { Car } from '@prisma/client'
import { CarCard } from './CarCard'

type Props = {
	cars: Car[]
}

export function CarList({ cars }: Props) {
	return (
		<ul className='grid grid-cols-1 md:grid-cols-3 gap-6'>
			{cars.map(car => (
				<CarCard
					key={car.id}
					car={car}
				/>
			))}
		</ul>
	)
}

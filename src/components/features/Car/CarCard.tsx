import type { Car } from '@prisma/client'
import Image from 'next/image'
import { Heart } from 'lucide-react'

type Props = {
	car: Car
}

export function CarCard({ car }: Props) {
	return (
		<li className='rounded-lg shadow-lg'>
			<div>
				<div className='relative w-full h-73'>
					<Image
						src={car.imageUrl}
						alt={`${car.brand} ${car.model}`}
						width={250}
						height={292}
						className='object-cover w-full h-full rounded-t-lg'
					/>
					<div
						className={`absolute flex items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer bottom-2 right-2 hover:bg-[#ededed]`}
					>
						<Heart />
					</div>
				</div>
				<div className='p-4 space-y-2'>
					<h2 className='font-semibold'>
						{car.brand} {car.model}
					</h2>
					<p className='text-sm'>
						{car.year} | {car.fuelType}
					</p>

					<p className='font-bold'>{car.pricePerMonth}$ / month</p>
				</div>
			</div>
		</li>
	)
}

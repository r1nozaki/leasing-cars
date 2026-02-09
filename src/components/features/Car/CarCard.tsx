'use client'

import type { Car } from '@prisma/client'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useFavoriteStore } from '@/src/store/favorites.store'
import clsx from 'clsx'
import { formatRelativeDate } from '@/src/lib/date'

type Props = {
	car: Car
}

export function CarCard({ car }: Props) {
	const ids = useFavoriteStore(s => s.ids)
	const toggle = useFavoriteStore(s => s.toggle)
	const active = ids.includes(car.id)

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
					<button
						onClick={() => toggle(car.id)}
						className={`absolute flex items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer bottom-2 right-2 hover:bg-[#ededed]`}
						aria-label='Toggle favorite'
					>
						<Heart
							className={clsx(
								'w-6 h-6 text-red-500 transition-colors duration-300',
								active ? ' fill-red-500' : ''
							)}
						/>
					</button>
				</div>
				<div className='p-4 space-y-2'>
					<h2 className='font-semibold'>
						{car.brand} {car.model}
					</h2>
					<p className='text-sm'>
						{car.year} | {car.fuelType}
					</p>
					<p className='font-bold'>{car.pricePerMonth}$ / month</p>
					<p className='font-light text-gray-500'>
						Added at {formatRelativeDate(car.createdAt)}
					</p>
				</div>
			</div>
		</li>
	)
}

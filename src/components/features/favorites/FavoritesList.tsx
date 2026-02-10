'use client'

import type { Car } from '@prisma/client'
import { CarList } from '../Car/CarList'
import { useFavoriteStore } from '@/src/store/favorites.store'
import { Button } from '../../ui/Button'

type Props = {
	cars: Car[]
}

export function FavoritesList({ cars }: Props) {
	const ids = useFavoriteStore(s => s.ids)

	const favoriteCars = cars.filter(car => ids.includes(car.id))

	if (favoriteCars.length === 0) {
		return (
			<div className='flex flex-col items-center justify-center py-20 text-center'>
				<h1 className='text-2xl font-semibold'>The list is empty</h1>
				<Button
					text='Back to catalog'
					link='/'
					className='bg-[#333333] text-white mt-8 transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black'
				/>
			</div>
		)
	}

	return <CarList cars={favoriteCars} />
}

'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useFavoriteStore } from '@/src/store/favorites.store'
import { Badge } from '../ui/Badge'
import { CarFront } from 'lucide-react'

export function Header() {
	const count = useFavoriteStore(s => s.ids.length)

	return (
		<header className='sticky top-0 z-10 px-10 py-4 bg-white border-b'>
			<div className='flex items-center justify-between '>
				<Link
					href={'/'}
					className='flex items-center gap-1 text-xl font-bold text-black hover:opacity-65'
				>
					<CarFront size={30} />
					Leasing Cars
				</Link>
				<Link
					href={'/favourites'}
					className='relative flex items-center justify-center p-3 hover:rounded-full hover:bg-[#e5e5e5]'
				>
					<Heart
						color='#000000'
						size={25}
					/>
					<Badge value={count} />
				</Link>
			</div>
		</header>
	)
}

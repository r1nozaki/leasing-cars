import { prisma } from '@/src/lib/prisma'
import { FavoritesList } from '@/src/components/features/favorites/FavoritesList'

export default async function FavoritesPage() {
	const cars = await prisma.car.findMany({
		orderBy: { createdAt: 'desc' }
	})

	return (
		<section className='py-8'>
			<h1 className='text-3xl font-bold mb-6'>Ваші збереженні авто</h1>
			<FavoritesList cars={cars} />
		</section>
	)
}

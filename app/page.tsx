import { prisma } from '@/src/lib/prisma'
import { CarList } from '@/src/components/features/Car/CarList'

export default async function CarCatalog() {
	const cars = await prisma.car.findMany({
		orderBy: { createdAt: 'desc' }
	})

	return (
		<section className='py-8'>
			<h1 className='text-3xl font-bold mb-6'>Available Cars</h1>
			<CarList cars={cars} />
		</section>
	)
}

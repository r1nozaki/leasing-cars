import { prisma } from '@/src/lib/prisma'
import { notFound } from 'next/navigation'
import { CarDetails } from '@/src/components/features/Car/CarDetails'
import { CarsSimilar } from '@/src/components/features/Car/CarsSimilar'

type Props = {
	params: Promise<{ id: string }>
}

export default async function CarDetailsPage({ params }: Props) {
	const { id } = await params

	const car = await prisma.car.findUnique({
		where: { id }
	})

	if (!car) {
		notFound()
	}

	const similarCars = await prisma.car.findMany({
		where: {
			OR: [{ brand: car.brand }, { fuelType: car.fuelType }],
			NOT: { id: car.id }
		},
		take: 3
	})

	return (
		<>
			<CarDetails car={car} />
			<CarsSimilar cars={similarCars} />
		</>
	)
}

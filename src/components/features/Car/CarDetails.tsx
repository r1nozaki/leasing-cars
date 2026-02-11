import Image from 'next/image'
import type { Car } from '@prisma/client'
import { Characteristic } from '../../ui/Characteristic'
import { Fuel, Calendar, Car as CarIcon, Settings2 } from 'lucide-react'
export function CarDetails({ car }: { car: Car }) {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 py-8'>
			<div className='relative aspect-video w-full'>
				<Image
					src={car.imageUrl}
					alt={`${car.brand} ${car.model}`}
					fill
					priority
					className='object-cover rounded-2xl'
				/>
			</div>
			<div className='flex flex-col justify-center'>
				<h1 className='text-4xl font-bold mb-2'>
					{car.brand} {car.model}
				</h1>
				<p className='text-3xl font-bold text-[#07b75f] mb-6'>
					{car.pricePerMonth}$ / month
				</p>
				<div className='grid grid-cols-2 gap-y-4 border-t pt-6'>
					<Characteristic
						label='Year'
						value={car.year}
						icon={Calendar}
					/>
					<Characteristic
						label='Transmission'
						value={car.transmission}
						icon={Settings2}
					/>
					<Characteristic
						label='Fuel Type'
						value={car.fuelType}
						icon={Fuel}
					/>
					<Characteristic
						label='Body Type'
						value={car.bodyType}
						icon={CarIcon}
					/>
				</div>
			</div>
		</section>
	)
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	await prisma.car.createMany({
		data: [
			{
				brand: 'BMW',
				model: 'i4',
				pricePerMonth: 750,
				fuelType: 'ELECTRIC',
				transmission: 'Automatic',
				year: 2023,
				imageUrl: '/cars/previewBMWI4.jpg'
			},
			{
				brand: 'BMW',
				model: 'X5',
				pricePerMonth: 820,
				fuelType: 'DIESEL',
				transmission: 'Automatic',
				year: 2022,
				imageUrl: '/cars/previewBMWX5.jpg'
			},
			{
				brand: 'Tesla',
				model: 'Model 3',
				pricePerMonth: 680,
				fuelType: 'ELECTRIC',
				transmission: 'Automatic',
				year: 2023,
				imageUrl: '/cars/previewTeslaModel3.jpg'
			},
			{
				brand: 'Tesla',
				model: 'Model Y',
				pricePerMonth: 720,
				fuelType: 'ELECTRIC',
				transmission: 'Automatic',
				year: 2022,
				imageUrl: '/cars/previewTeslaModelY.jpg'
			},
			{
				brand: 'Audi',
				model: 'A6',
				pricePerMonth: 770,
				fuelType: 'GASOLINE',
				transmission: 'Automatic',
				year: 2021,
				imageUrl: '/cars/previewAudiA6.jpg'
			},
			{
				brand: 'Audi',
				model: 'Q7',
				pricePerMonth: 850,
				fuelType: 'DIESEL',
				transmission: 'Automatic',
				year: 2022,
				imageUrl: '/cars/previewAudiQ7.jpg'
			},
			{
				brand: 'Mercedes-Benz',
				model: 'C-Class',
				pricePerMonth: 700,
				fuelType: 'GASOLINE',
				transmission: 'Automatic',
				year: 2021,
				imageUrl: '/cars/previewMercedesAMGC63s.jpg'
			},
			{
				brand: 'Mercedes-Benz',
				model: 'EQS',
				pricePerMonth: 980,
				fuelType: 'ELECTRIC',
				transmission: 'Automatic',
				year: 2023,
				imageUrl: '/cars/previewMercedesEQS.jpg'
			},
			{
				brand: 'Volkswagen',
				model: 'ID.4',
				pricePerMonth: 620,
				fuelType: 'ELECTRIC',
				transmission: 'Automatic',
				year: 2022,
				imageUrl: '/cars/previewVolkswagenID4.jpg'
			},
			{
				brand: 'Volkswagen',
				model: 'Passat',
				pricePerMonth: 540,
				fuelType: 'DIESEL',
				transmission: 'Automatic',
				year: 2020,
				imageUrl: '/cars/previewVolkswagenPassat.jpg'
			},
			{
				brand: 'Toyota',
				model: 'RAV4',
				pricePerMonth: 580,
				fuelType: 'HYBRID',
				transmission: 'Automatic',
				year: 2021,
				imageUrl: '/cars/previewToyotaRAV4.jpg'
			},
			{
				brand: 'Toyota',
				model: 'Camry',
				pricePerMonth: 560,
				fuelType: 'GASOLINE',
				transmission: 'Automatic',
				year: 2020,
				imageUrl: '/cars/previewToyotaCamry.jpg'
			},
			{
				brand: 'Hyundai',
				model: 'Ioniq 5',
				pricePerMonth: 610,
				fuelType: 'ELECTRIC',
				transmission: 'Automatic',
				year: 2022,
				imageUrl: '/cars/previewHyundaiIoniq5.jpg'
			},
			{
				brand: 'Kia',
				model: 'Sportage',
				pricePerMonth: 530,
				fuelType: 'HYBRID',
				transmission: 'Automatic',
				year: 2021,
				imageUrl: '/cars/previewKiaSportage.jpg'
			},
			{
				brand: 'Ford',
				model: 'Mustang Mach-E',
				pricePerMonth: 740,
				fuelType: 'ELECTRIC',
				transmission: 'Automatic',
				year: 2022,
				imageUrl: '/cars/previewMustangMachE.jpg'
			}
		]
	})
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})

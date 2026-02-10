'use server'

import { prisma } from '@/src/lib/prisma'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function toggleFavoriteAction(carId: string) {
	const cookieStore = await cookies()
	const deviceId = cookieStore.get('deviceId')?.value

	if (!deviceId) return null

	const existing = await prisma.favorite.findUnique({
		where: { carId_deviceId: { carId, deviceId } }
	})

	if (existing) {
		await prisma.favorite.delete({ where: { id: existing.id } })
	} else {
		await prisma.favorite.create({
			data: { carId, deviceId }
		})
	}

	revalidatePath('/')
	revalidatePath('/favorites')
}

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type FavoritesStore = {
	ids: string[]
	toggle: (
		carId: string,
		action?: (id: string) => Promise<void | null | undefined>
	) => Promise<void>
}

export const useFavoriteStore = create<FavoritesStore>()(
	persist(
		(set, get) => ({
			ids: [],
			toggle: async (carId, action) => {
				const currentIds = get().ids
				const isRemoving = currentIds.includes(carId)

				set({
					ids: isRemoving
						? currentIds.filter(id => id !== carId)
						: [...currentIds, carId]
				})

				if (action) {
					try {
						await action(carId)
					} catch (error) {
						set({ ids: currentIds })
						console.error('Помилка синхронізації з БД', error)
					}
				}
			}
		}),
		{
			name: 'favorite-storage',
			partialize: state => ({ ids: state.ids })
		}
	)
)

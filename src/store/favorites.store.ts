import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type FavoritesStore = {
	ids: string[]
	add: (carId: string) => void
	remove: (carId: string) => void
	toggle: (carId: string) => void
}

export const useFavoriteStore = create<FavoritesStore>()(
	persist(
		(set, get) => ({
			ids: [],

			add: carId =>
				set(state => ({
					ids: state.ids.includes(carId) ? state.ids : [...state.ids, carId]
				})),

			remove: carId =>
				set(state => ({
					ids: state.ids.filter(id => id !== carId)
				})),

			toggle: carId => {
				const { ids, add, remove } = get()
				ids.includes(carId) ? remove(carId) : add(carId)
			}
		}),
		{ name: 'favorite-storage', partialize: state => ({ ids: state.ids }) }
	)
)

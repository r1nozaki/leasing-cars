'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const FUELS = ['ELECTRIC', 'HYBRID', 'GASOLINE', 'DIESEL']

export function FuelFilter() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const selected = searchParams.getAll('fuel')

	const toggleFuel = (query: string) => {
		const params = new URLSearchParams(searchParams)

		const fuels = new Set(params.getAll('fuel'))

		if (fuels.has(query)) {
			fuels.delete(query)
		} else {
			fuels.add(query)
		}

		params.delete('fuel')
		fuels.forEach(f => params.append('fuel', f))

		router.push(`/?${params.toString()}`)
	}

	return (
		<div className='space-y-2'>
			<p className='font-medium'>Fuel Type</p>
			{FUELS.map(fuel => (
				<label
					key={fuel}
					className='flex items-center gap-2'
				>
					<input
						type='checkbox'
						checked={selected.includes(fuel)}
						onChange={() => toggleFuel(fuel)}
					/>
					{fuel}
				</label>
			))}
		</div>
	)
}

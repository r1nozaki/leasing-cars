'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/src/hooks/useDebounce'

export function PriceFilter() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const [min, setMin] = useState(searchParams.get('minPrice') ?? '')
	const [max, setMax] = useState(searchParams.get('maxPrice') ?? '')

	const debouncedMin = useDebounce(min)
	const debouncedMax = useDebounce(max)

	useEffect(() => {
		const params = new URLSearchParams(searchParams)

		if (debouncedMin) {
			params.set('minPrice', debouncedMin)
		} else {
			params.delete('minPrice')
		}

		if (debouncedMax) {
			params.set('maxPrice', debouncedMax)
		} else {
			params.delete('maxPrice')
		}
		router.push(`/?${params.toString()}`)
	}, [debouncedMin, debouncedMax])

	return (
		<div className='space-y-2'>
			<p className='font-medium'>Price per month</p>

			<div className='flex gap-2'>
				<input
					type='number'
					placeholder='Min'
					value={min}
					onChange={e => setMin(e.target.value)}
					className='w-full border rounded px-2 py-1'
				/>
				<input
					type='number'
					placeholder='Max'
					value={max}
					onChange={e => setMax(e.target.value)}
					className='w-full border rounded px-2 py-1'
				/>
			</div>
		</div>
	)
}

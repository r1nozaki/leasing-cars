'use client'

import { useRouter, useSearchParams } from 'next/navigation'

type Props = {
	brands: string[]
}

export function BrandFilter({ brands }: Props) {
	const router = useRouter()
	const searchParams = useSearchParams()
	const brand = searchParams.get('brand') ?? ''

	const onChange = (query: string) => {
		const params = new URLSearchParams(searchParams)

		if (query) {
			params.set('brand', query)
		} else {
			params.delete('brand')
		}
		router.push(`/?${params.toString()}`)
	}

	return (
		<div className='space-y-2'>
			<label className='font-medium'>Brand</label>
			<select
				value={brand}
				onChange={e => onChange(e.target.value)}
				className='w-full border rounded px-3 py-2 mt-2'
			>
				<option value=''>All</option>
				{brands.map(b => (
					<option
						key={b}
						value={b}
					>
						{b}
					</option>
				))}
			</select>
		</div>
	)
}

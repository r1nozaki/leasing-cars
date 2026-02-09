'use client'

import { useRouter } from 'next/navigation'

export function ResetFilters() {
	const router = useRouter()

	return (
		<button
			onClick={() => router.push('/')}
			className='w-full border border-black bg-black text-white rounded py-2 transition-colors duration-300 hover:bg-transparent hover:text-black cursor-pointer'
		>
			Reset filters
		</button>
	)
}

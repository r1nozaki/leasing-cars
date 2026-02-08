'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export function SearchBar() {
	const router = useRouter()
	const params = useSearchParams()
	const [query, setQuery] = useState(params.get('q') ?? '')

	function onSubmit(e: React.FormEvent) {
		e.preventDefault()

		const next = new URLSearchParams(params.toString())

		query ? next.set('q', query) : next.delete('q')

		router.push(`/?${next.toString()}`)
	}

	return (
		<form onSubmit={onSubmit}>
			<input
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder='Search by model...'
				className='w-full px-3 py-2 border rounded'
			/>
		</form>
	)
}

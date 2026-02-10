'use client'

import type { ButtonHTMLAttributes } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	link?: string
	classname?: string
}

export function Button({
	text,
	link,
	className = '',
	onClick,
	...rest
}: ButtonProps) {
	const router = useRouter()

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (link) {
			router.push(link)
			return
		}

		onClick?.(event)
	}

	return (
		<button
			type='button'
			className={`md:w-55.5 md:h-16 w-45 h-12 flex items-center justify-center rounded gap-2 cursor-pointer text-sm md:text-base ${className}`}
			onClick={handleClick}
			{...rest}
		>
			{text}
		</button>
	)
}

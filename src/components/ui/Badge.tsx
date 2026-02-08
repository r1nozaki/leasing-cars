import clsx from 'clsx'

type Props = {
	value: number
}

export function Badge({ value }: Props) {
	if (value === 0) return null

	return (
		<span
			className={clsx(
				'absolute -top-1 -right-1',
				'min-w-4.5 h-4.5',
				'rounded-full bg-red-500',
				'text-xs font-bold text-white',
				'flex items-center justify-center'
			)}
		>
			{value}
		</span>
	)
}

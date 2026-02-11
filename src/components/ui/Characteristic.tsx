import { LucideIcon } from 'lucide-react'
type CharacteristicProps = {
	label: string
	value: string | number
	icon: LucideIcon
}

export function Characteristic({
	label,
	value,
	icon: Icon
}: CharacteristicProps) {
	return (
		<div className='flex items-start gap-3'>
			<div className='mt-1 p-2 bg-slate-100 rounded-lg shrink-0'>
				<Icon className='w-5 h-5 text-slate-600' />
			</div>

			<div className='space-y-0.5'>
				<p className='text-xs text-gray-500 uppercase tracking-wider font-medium'>
					{label}
				</p>
				<p className='font-semibold text-base capitalize'>
					{value.toString().toLowerCase()}
				</p>
			</div>
		</div>
	)
}

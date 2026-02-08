import { Button } from '@/src/components/ui/Button'

export default function NotFoundPage() {
	return (
		<section className='flex items-center justify-center min-h-screen'>
			<div className='flex flex-col items-center'>
				<h1 className='font-bold font-roboto text-9xl'>404</h1>
				<p className='mt-6 text-4xl font-light font-roboto'>Page Not Found</p>
				<Button
					text={'Go Home'}
					link='/'
					className='bg-[#333333] text-white mt-8 transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black'
				/>
			</div>
		</section>
	)
}

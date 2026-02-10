import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
	const response = NextResponse.next()

	const deviceId = request.cookies.get('deviceId')?.value

	if (!deviceId) {
		const newDeviceId = crypto.randomUUID()

		response.cookies.set('deviceId', newDeviceId, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 365,
			path: '/'
		})
	}

	return response
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

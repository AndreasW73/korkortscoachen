import { NextResponse } from 'next/server'
import { createClient } from 'src/lib/supabase/server'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next') ?? '/'

  // console.log('FULL URL:', request.url)
  // console.log('CODE:', code)

  if (code) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    // console.log('EXCHANGE DATA:', data)
    // console.error('EXCHANGE ERROR:', error)

    if (!error) {
      const origin = url.origin
      const forwardedHost = request.headers.get('x-forwarded-host')
      const isLocalEnv = process.env.NODE_ENV === 'development'

      if (isLocalEnv) return NextResponse.redirect(`${origin}${next}`)
      if (forwardedHost) return NextResponse.redirect(`https://${forwardedHost}${next}`)
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  return NextResponse.redirect(`${url.origin}/auth/auth-code-error`)
}

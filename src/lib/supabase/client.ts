import type { SupabaseClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'
import { CONFIG } from 'src/global-config'

const isSupabase = CONFIG.auth.method === 'supabase'

export const supabase = isSupabase
  ? createBrowserClient(
      CONFIG.supabase.url,
      CONFIG.supabase.key,
      {
        auth: { flowType: 'pkce' },
      }
    )
  : ({} as SupabaseClient<any, 'public', any>)

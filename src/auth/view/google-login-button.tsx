'use client';

import { Button } from '@mui/material';
import { Iconify } from 'src/components/iconify';
import { supabase } from 'src/lib/supabase/client';

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {

    const redirectTo = `${window.location.origin}/auth/callback`;

    // console.log(redirectUrl)

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectTo, // Use dynamic URL here
      },
    })
  };

  return (
    <Button
      onClick={handleGoogleLogin}
      startIcon={<Iconify
        icon='socials:google'
      />}
      variant="outlined"
      fullWidth
      sx={{ textTransform: 'none', fontSize: '16px', py: 1.5 }}
    >
      Logga in med Google
    </Button>
  );
}


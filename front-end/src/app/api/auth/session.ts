
import { cookies } from "next/headers";
import { fetchCookie, refresh } from "./refresh/refresh";
import nookies from "nookies";

export async function session(accessToken: string | undefined, refreshToken: string | undefined) {
  const cookieStore = await cookies();

  try {
    const response = await fetch('http://localhost:3001/session', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      credentials: 'include'
    });
    
    const responseData = await response.json();

    if (responseData.error === 'jwt expired') {
      console.log('refresh token');
      const newToken = await refresh(refreshToken);

      nookies.set(null, 'accessToken', newToken.accessToken, {
        maxAge: 60 * 60 * 24,
        path: '/'
      })
  
      return newToken.accessToken;
    }

    return cookieStore.get('accessToken')?.value;
  } catch (error) {
    console.error(error);
  }
}
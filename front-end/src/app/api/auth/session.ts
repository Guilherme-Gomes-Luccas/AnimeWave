
import { cookies } from "next/headers";
import { refresh } from "./refresh/refresh";
import nookies from "nookies";

export async function session(accessToken: string | undefined, refreshToken: string | undefined) {
  const cookieStore = await cookies();

  console.log('TokenSession: ', accessToken);

  try {
    const response = await fetch('http://localhost:3001/session', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      credentials: 'include'
    });
    
    const responseData = await response.json();

    console.log('session: ', responseData);
    if (responseData.error === 'jwt expired' || responseData.error === 'jwt malformed') {
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
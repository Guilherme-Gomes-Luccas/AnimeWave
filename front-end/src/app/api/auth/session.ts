
import { cookies } from "next/headers";
import { refresh } from "./refresh/refresh";
import nookies from "nookies";

export async function session(accessToken: string | undefined | string[], refreshToken: string | undefined | string[]) {
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

    if (responseData.error) {
      const newToken = await refresh(refreshToken);

      nookies.set(null, 'accessToken', newToken.accessToken, {
        maxAge: 60 * 60 * 24,
        path: '/'
      })
  
      if (newToken.error) {
        return null;
      
      }else {
        return newToken.accessToken;
      }
    }

    return cookieStore.get('accessToken')?.value;
  } catch (error) {
    console.error(error);
  }
}
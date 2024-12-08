"use server"
export async function refresh(refreshToken: string | undefined | string[]) {
  if(!refreshToken) {
    return new Response('Refresh token não encontrado', { status: 401 });
  }

  try {
    const response = await fetch('http://localhost:3001/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        refreshToken: refreshToken
      })
    });
    
    const responseData = await response.json();
    return responseData;
  }catch (error) {
    console.error(error);
  }
}
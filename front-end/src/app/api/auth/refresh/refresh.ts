"use server"

import { cookies } from "next/headers";
import { setNewToken } from "./setNewToken";

export async function refresh(refreshToken: string | undefined) {
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
    const cookieStore = await cookies();

  
    console.log('Set-Cookie:', cookieStore.get('accessToken')); // Cheque se o backend está enviando o Set-Cookie

    return responseData;

  }catch (error) {
    console.error(error);
  }
}

export async function fetchCookie() {
  const checkCookie = await fetch('http://localhost:3001/refresh/check-cookie', {
    method: 'GET',
    credentials: 'include'
  });

  console.log('checkCookie: ', (await checkCookie.json()));
}
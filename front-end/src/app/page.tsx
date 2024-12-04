import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import nookies from "nookies";
//import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import axios from "axios";
import { session } from "./api/auth/session";

const getSession = async () => {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');

  //const accessToken = Cookie.get('accessToken');
  //const refreshToken = Cookie.get('refreshToken');
  console.log('1: ', accessToken);

  accessToken = await session(accessToken?.value, refreshToken?.value);
  console.log('2: ', accessToken);
  
  /*const session = await fetch('http://localhost:3001/session', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const sessionData = await session.json();

  if (sessionData.error) {
    /*const refresh = await fetch('http://localhost:3001/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        refreshToken: refreshToken
      })
    });*/

   /* const refresh = await axios.post('http://localhost:3001/refresh', {
      refreshToken
    }, {
      withCredentials: true,
    })

    const refreshData = await refresh.data;
    accessToken = refreshData.accessToken;

  }*/
}

export default async function Home() {

  await getSession();

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">{}</h1>
      <Link href="/login" >Login</Link>
      <Link href="/cadastro">Cadastro</Link>
    </div>
  );
}

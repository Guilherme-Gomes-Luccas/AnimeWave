import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Home() {
  let accessToken = (await cookies()).get('accessToken');
  const refreshToken = (await cookies()).get('refreshToken');

  console.log(accessToken);
  const getSession = async () => {
    
    const session = await fetch('http://localhost:3001/session', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken?.value}`
      }
    });

    if (!session.ok) {
      const refresh = await fetch('http://localhost:3001/refresh', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${refreshToken?.value}`
        },
      });

      accessToken = (await refresh.json()).accessToken;
      console.log(accessToken);
    }
  }

  await getSession();

  return (
    <div className="flex flex-col">
      <Link href="/login">Login</Link>
      <Link href="/cadastro">Cadastro</Link>
    </div>
  );
}

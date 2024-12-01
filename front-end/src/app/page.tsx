import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Home() {
  const accessToken = (await cookies()).get('accessToken');
  const refreshToken = (await cookies()).get('refreshToken');

	console.log(accessToken, refreshToken);
  return (
    <div className="flex flex-col">
      <Link href="/login">Login</Link>
      <Link href="/cadastro">Cadastro</Link>
    </div>
  );
}

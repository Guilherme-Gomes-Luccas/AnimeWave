import Image from "next/image";
import Header from "./components/Header";
import feed from "./image/feed.png";
import SearchBar from "./components/SearchBar";
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
}

export default async function Home() {
  await getSession();

  const items = [
    'Dragon Ball Balls',
    'Gintama',
    'One Piece',
    'Naruto',
    'Solo Levening',
    'Melhor anime de Fotboll',
    'Pokemon',
    
  ]

  return (

    <div className="flex flex-col">

      <Header />

      <div className="w-full max-h-24">
        <Image
          src={feed}
          width={1920}
          height={396}
          alt="Imagem do Feed"
        />
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <SearchBar items={items} />
      </div>
    </div>
  )
}

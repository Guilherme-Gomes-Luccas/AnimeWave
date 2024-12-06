import Image from "next/image";
import Header from "../components/Header";
import feed from "../image/feed.png";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import { cookies } from "next/headers";
import nookies from "nookies";
//import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import axios from "axios";
import { session } from "../api/auth/session";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

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
  ];

  const posts = [
    {
      avatar: "/path/to/avatar1.png",
      username: "Guiguh01",
      handle: "dragonBallBalls",
      content:
        "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga...",
    },
    {
      avatar: "/path/to/avatar2.png",
      username: "Guiguh02",
      handle: "dragonBallBalls2",
      content:
        "Viva Forevis aptent taciti sociosqu ad litora torquent. Mé faiz elementum girarzis...",
    },
    {
      avatar: "/path/to/avatar3.png",
      username: "Guiguh03",
      handle: "dragonBallBalls3",
      content:
        "A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach... A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach... A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...",
    },

    {
      avatar: "/path/to/avatar3.png",
      username: "Guiguh03",
      handle: "dragonBallBalls3",
      content:
        "A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...",
    },
   
    {
      avatar: "/path/to/avatar1.png",
      username: "Guiguh01",
      handle: "dragonBallBalls",
      content:
        "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga...",
    },
    {
      avatar: "/path/to/avatar2.png",
      username: "Guiguh02",
      handle: "dragonBallBalls2",
      content:
        "Viva Forevis aptent taciti sociosqu ad litora torquent. Mé faiz elementum girarzis...",
    },
    {
      avatar: "/path/to/avatar3.png",
      username: "Guiguh03",
      handle: "dragonBallBalls3",
      content:
        "A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach... A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach... A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...",
    },

    {
      avatar: "/path/to/avatar3.png",
      username: "Guiguh03",
      handle: "dragonBallBalls3",
      content:
        "A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...",
    },
   

  ];

  return (

    <div className="flex flex-col">

      <Header />

      <div className=" w-full h-fullmax-h-24">
        <Image
          src={feed}
          width={1920}
          height={396}
          alt="Imagem do Feed"
        />
      </div>

      <div className=" bg-[#E1F8FF] flex flex-row  items-start justify-center pt-8">
        <SearchBar items={items} />
      </div>

      <div className="bg-[#E1F8FF]  max-h-screen py-8">
      <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-start gap-1 w-full mx-auto p-5" >
        {posts.map((post, index) => (
          <PostCard
            key={index}
            avatar={post.avatar}
            username={post.username}
            handle={post.handle}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );

      <div>
        <Footer />
      </div>


    </div>

  );
}

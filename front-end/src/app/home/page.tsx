import Image from "next/image";
import Header from "../components/Header";
import feed from "../image/feed.png";
import SearchBar from "../components/SearchBar";
import { cookies } from "next/headers";
import { session } from "../api/auth/session";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import Slider from "@/components/Slider/Slider";

export default async function Home() {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');
  const getSession = async () => {
    console.log('1: ', accessToken);
    accessToken = await session(accessToken?.value, refreshToken?.value);
    console.log('2: ', accessToken);
    return accessToken;
  }
  
  const getUserData = async (accessToken: string) => {
    console.log('token: ', accessToken);

    try {
      const response = await fetch('http://localhost:3001/get-user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
  
      const user = await response.json();
  
      return user;
  
    } catch (error) {
      
    }
  }
  
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
  
  const token = await getSession();
  const userData = await getUserData(`${token}`);

  return (

    <div className="flex flex-col">

      <Header 
        username={userData.user.name}
        photo={userData.user.photo}
      />

      <div className=" w-full h-fit z-40">       
        <Slider />
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

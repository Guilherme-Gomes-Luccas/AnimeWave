"use client"


import Sidebar from "./components/SideBar"
import CreatePost from "./components/CreatePost";
import { useState } from "react";



const Home: React.FC = () => {


  const [posts, setPosts] = useState([


    {
      avatar: "https://via.placeholder.com/40",
      username: "Guiguh01",
      handle: "dragonBallBalls",
      content:
        "Mussum Ipsum,..a pi, cacilds vidis litro abertis. Manduma Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga..",
      title: " This anime smells like a bus driver after a long day..."
    },
    {
      avatar: "https://via.placeholder.com/40",
      username: "Guiguh02",
      handle: "dragonBallBalls2",
      content:
        "Viva Forevis aptent taciti sociosqu ad litora torquent. Mé faiz elementum girarzis...",
      title: "Titulo"
    },
    {
      avatar: "https://via.placeholder.com/40",
      username: "Guiguh03",
      handle: "dragonBallBalls3",
      content:
        "A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach... A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach... A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...",
      title: "Titulo"
    },

    {
      avatar: "https://via.placeholder.com/40",
      username: "Guiguh03",
      handle: "dragonBallBalls3",
      content:
        "A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...",
      title: "Titulo"
    },

    {
      avatar: "https://via.placeholder.com/40",
      username: "Guiguh01",
      handle: "dragonBallBalls",
      content:
        "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga...",
      title: "Titulo"
    },
    {
      avatar: "https://via.placeholder.com/40",
      username: "Guiguh02",
      handle: "dragonBallBalls2",
      content:
        "Viva Forevis aptent taciti sociosqu ad litora torquent. Mé faiz elementum girarzis...",
      title: "Titulo"
    },
    {
      avatar: "/path/to/avatar3.png",
      username: "Guiguh03",
      handle: "dragonBallBalls3",
      content:
        "A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach... A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach... A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...",
      title: "Titulo"
    },

    {
      avatar: "/path/to/avatar3.png",
      username: "Guiguh03",
      handle: "dragonBallBalls3",
      content:
        "A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach...",
      title: "Titulo"
    },

  ])

import Cadastro from "./cadastro/page";

export default async function Page() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />



      <div className=" h-screen bg-gray-100 justify-center itens-center ">
        <div className="max-w-full max-h-full h-full overflow-y-scroll bg-backgroundAnimeWave p-4 rounded-lg" >

          {posts.map((post, index) => (
            <CreatePost
              key={index}
              avatar={post.avatar}
              username={post.username}
              handle={post.handle}
              content={post.content}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </div>

  );
    <Cadastro />
  )
}

export default Home;

import Image from "next/image";


import Sidebar from "./components/SideBar";

import CreatePost from "./components/CreatePost";


export default async function Home() {

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
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>

      <div className="flex-1 p-6">
      {posts.map((post, index) => (
          <CreatePost
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
}

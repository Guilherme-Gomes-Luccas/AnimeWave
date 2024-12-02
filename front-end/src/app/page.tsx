import Image from "next/image";
import Header from "./components/Header";
import feed from "./image/feed.png";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";


export default function Home() {

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
   


  ];

  return (

    <div className="flex flex-col">

      <div>
        <Header />
      </div>

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
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
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

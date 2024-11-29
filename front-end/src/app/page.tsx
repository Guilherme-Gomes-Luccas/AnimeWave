import Image from "next/image";
import Header from "./components/Header";
import feed from "./image/feed.png";
import SearchBar from "./components/SearchBar";


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



  return (

    <div className="flex flex-col">

      <div>
        <Header />
      </div>

      <div className="w-full max-h-24">
        <Image
          src={feed}
          width={1920}
          height={396}
          alt="Imagem do Feed"
        />
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div>
       
        <SearchBar items={items} />
      </div>
    </div>


    </div>

  );
}

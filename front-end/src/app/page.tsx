import Image from "next/image";
import Header from "./components/Header";
import feed from "./image/feed.png";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";


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

      <div className=" w-full h-fullmax-h-24">
        <Image
          src={feed}
          width={1920}
          height={396}
          alt="Imagem do Feed"
        />
      </div>

      <div className=" bg-[#E1F8FF] flex  items-start justify-center pt-8">
        <SearchBar items={items} />
      </div>

      <div>
        <Footer />
      </div>


    </div>

  );
}

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

      <div className="min-h-screen flex items-center justify-center p-4">
        <PostCard
          avatar="/avatarpath.png" // Substitua por URL real ou caminho público
          name="name-path"
          username="username-path"
          content={`Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Bota 1 metro de cachaçis aí pra viagem!
        
Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Viva Forevis aptent taciti sociosqu ad litora torquent. Mé faiz elementum girarzis, nisi eros vermeio. Detraxit consequat et quo num tendi nada. A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cach`}
        />
      </div>

      <div>
        <Footer />
      </div>


    </div>

  );
}

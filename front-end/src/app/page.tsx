import Image from "next/image";
import Header from "./components/Header";
import feed from "./image/feed.png"

export default function Home() {
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
    </div>

  );
}

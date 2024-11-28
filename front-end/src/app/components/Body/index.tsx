import Image from "next/image";
import feed from "./Feed.png";

export default function Body(){
    return(
        <div className="w-full max-h-24">
        <Image
            src={feed}
            width={1920}
            height={396}
        
            alt="Imagem do Feed"
        />
  
        </div>
    )

};
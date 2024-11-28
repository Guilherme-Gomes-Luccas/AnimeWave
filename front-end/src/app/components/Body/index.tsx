import Image from "next/image";
import feed from "./Feed.png";

export default function Body(){
    return(
        <div>
        <Image
            src={feed}
            width={1423}
            height={396}
            alt="Imagem do Feed"
        />


  
        </div>
    )

};
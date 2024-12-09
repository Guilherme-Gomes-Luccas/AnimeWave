import Image from "next/image";
import Link from "next/link";

interface Arrow {
  url?: string;
	widht?: number;
	height?: number;
}

export default function GoBack({url, widht, height}: Arrow) {
    return(
			<Link href={url || "/"}> <Image src={'/img/arrowBack.svg'} width={65} height={65} alt="Go-Back-Img" className="pl-3 pt-3"/></Link>
    )
}
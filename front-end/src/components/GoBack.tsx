import Image from "next/image";
import Link from "next/link";

export default function GoBack() {
    return(
        <Link href={"/"}> <Image src={'/img/arrowBack.svg'} width={65} height={65} alt="Go-Back-Img" className="pl-3 pt-3"/></Link>
    )
}
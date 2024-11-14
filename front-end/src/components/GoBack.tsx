import { Kanit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function GoBack() {
    return(
        <Link href={"/"}> <Image src={'/img/arrowBack.svg'} width={80} height={80} alt="Go-Back-Img" className="pl-3 pt-3"/></Link>
    )
}
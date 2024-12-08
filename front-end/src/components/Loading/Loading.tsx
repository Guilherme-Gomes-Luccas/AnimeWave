import Image from "next/image";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});

export default function Loading() {
  return (
    <div>
      <Image
        src= '/img/loading.gif'
        width={100}
        height={100}
        alt="loading"
      />

      <p className={`text-black ${kanit.className}`}>Carregando...</p>
    </div>
  )
}
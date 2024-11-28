import Image from "next/image";
import Header from "./components/Header";


import Link from "next/link";
import Body from "./components/Body";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Body/>
    </div>
  );
}

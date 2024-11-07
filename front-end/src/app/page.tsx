import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link href="/login">LOGIN</Link>
      <h1>CADASTRO</h1>
      <h1>PROFILE</h1>
    </div>
  );
}

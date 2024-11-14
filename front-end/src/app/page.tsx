import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/login">Login</Link>
      <Link href="/cadastro">Cadastro</Link>
    </div>
  );
}

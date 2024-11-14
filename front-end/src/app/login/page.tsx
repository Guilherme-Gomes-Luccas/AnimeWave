import Button from "@/components/Button";
import Image from "next/image";
import { Kanit } from "next/font/google";
import GoBack from "@/components/GoBack";
import Link from "next/link";
import Input from "@/components/Input/Input";

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});

export default function Login() {
  return (
    <>
      <GoBack />
      <div className="mt-20 flex flex-col items-center justify-center">
        <Image src={'/img/logov4.svg'} width={640} height={640} alt="logo-animeWave" className="ml-32" />
        <div className="bg-white rounded-3xl shadow-2xl w-3/12 h-96 flex flex-col items-center">
          <h1 className="pt-2 text-3xl self-start pl-6">Login</h1>
          <form action="" className="flex flex-col w-96">
            <Input label="Email" placeholder="Digite seu Email" type="email" />

            <Input label="Senha" placeholder="Digite sua senha" type="password" />

            <a href="/" className="pb-4 pl-6 font-medium text-blue-500">Esqueci minha senha</a>

            <div className="self-center">
              <Button color="#006400" text="Acessar conta" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

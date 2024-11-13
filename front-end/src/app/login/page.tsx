import Button from "@/components/Button";
import Image from "next/image";
import { Kanit } from "next/font/google";
import GoBack from "@/components/GoBack";
import Link from "next/link";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

export default function Login() {
  return (
    <>
      <GoBack />
      <div className="mt-20 flex flex-col items-center justify-center">
          <Image src={'/img/logov4.svg'} width={640} height={640} alt="logo-animeWave" className="ml-32"/>
          <div className="bg-white rounded-3xl shadow-2xl w-1/3 h-96 flex flex-col items-center">
              <h1 className="pt-6 text-3xl self-start pl-6">Login</h1>
              <form action="" className="flex flex-col pt-5 w-96">
                  <label className="pt-2 pb-2">Email</label>
                  <input type="text" className="bg-[#D9D9D9] rounded-lg h-9 pl-2" />

                  <label className="pt-8 pb-2">Senha</label>
                  <input type="password" className="bg-[#D9D9D9] rounded-lg h-9 pl-2 mb-6" />

                  <div className="self-center">
                    <Button color="#006400" text="Acessar conta"/>
                  </div>
              </form>
          </div>
      </div>
    </>
  );
}

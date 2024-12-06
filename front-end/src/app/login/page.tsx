'use client'

import Button from "@/components/Button";
import Image from "next/image";
import { Kanit } from "next/font/google";
import GoBack from "@/components/GoBack";
import Input from "@/components/Input/Input";
import { useState } from "react";

import { validateUserToLogin } from "../../schemas/UserSchema";

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});

interface Error {
  message: string;
  path: string | number;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const messageError: Array<Error> = [];
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = validateUserToLogin({ email, password })

    if (!user.success) {
      console.log("Erro antes do back")
    }

    const response = await fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    console.log("ta vindo aqui")
    console.log(await response.json())
  }

  return (
    <>
      <GoBack />
      <div className="mt-20 flex flex-col items-center justify-center">
        <Image src={'/img/logov4.svg'} width={640} height={640} alt="logo-animeWave" className="ml-32" />
        <div className="bg-white rounded-3xl shadow-2xl w-3/12 h-96 flex flex-col items-center">
          <h1 className={`${kanit.className} pt-2 text-3xl self-start pl-6 text-black`}>Login</h1>
          <form action="" className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="w-full">
              <Input label="Email" placeholder="Digite seu Email" type="email" onChange={(e) => setEmail(e.target.value)} />

              <Input label="Senha" placeholder="Digite sua senha" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>


            <a href="/" className="pb-4 pl-6 font-medium text-blue-500">Esqueci minha senha</a>

            <div className="self-center">
              <Button color="#006400" text="Acessar conta" width="100%" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

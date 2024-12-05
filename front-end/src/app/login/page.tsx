'use client'

import Button from "@/components/Button";
import Image from "next/image";
import { Kanit } from "next/font/google";
import GoBack from "@/components/GoBack";
import Input from "@/components/Input/Input";
import Text from "@/components/Text";
import { useState } from "react";
import { validateUserToLogin } from "../../schemas/UserSchema";
import { useCookies } from "next-client-cookies";

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});

interface Error {
  message: string;
  path: Array<string | number>;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ emailError, setEmailError] = useState("");
	const [ passwordError, setPasswordError ] = useState("");
  const [ error, setError ] = useState("");

  const cookies = useCookies();

  const messageError: Array<Error> = [];
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmailError("");
		setPasswordError("");
    setError("");

    if(!email || !password) {
			setError('Preencha todos os campos!');
		
		} else {

      const user = validateUserToLogin({ email, password })

      if(user.error) {
				user.error.issues.map((err: Error) => {
          switch (err.path[0]) {
            case 'email':
							setEmailError(err.message);
							break;

						case 'password':
							setPasswordError(err.message);
							break;
          }
				})
			}else {

        const response = await fetch("http://localhost:3001/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })

        const responseData = await response.json()

        cookies.set('accessToken', responseData.accessToken)
        cookies.set('refreshToken', responseData.refreshToken)
				window.location.href = '/';
			}
    }
  }

  return (
    <>
      <GoBack />
      <div className="mt-20 flex flex-col items-center justify-center">
        <Image src={'/img/logov4.svg'} width={640} height={640} alt="logo-animeWave" className="ml-32" />
        <div className="bg-white rounded-3xl shadow-2xl w-3/12 h-fit flex flex-col items-center">
          <h1 className="pt-2 text-3xl self-start pl-6">Login</h1>
          <form action="" className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="w-full">
              <div>
                <Input label="Email" placeholder="Digite seu Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                {emailError && <Text content={emailError} color="red" size="0.75rem" marginBottom="0" />}
              </div>

              <div>
                <Input label="Senha" placeholder="Digite sua senha" type="password" onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <Text content={passwordError} color="red" size="0.75rem" marginBottom="0" />}
              </div>
            </div>

            <a href="/" className="pb-4 pl-6 font-medium text-blue-500">Esqueci minha senha</a>

            <div className="self-center pb-3">
              <Button color="#006400" text="Acessar conta" width="100%" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

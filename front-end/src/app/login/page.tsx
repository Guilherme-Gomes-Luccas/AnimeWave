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

        try {
          const response = await fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password })
          })
  
          const responseData = await response.json();
          
          if (responseData.error) {
            setError(responseData.error);
          
          }else {
            cookies.set('accessToken', responseData.accessToken, {
              sameSite: 'lax',
              secure: false,
              path: '/',
              domain: 'localhost',
            })
            cookies.set('refreshToken', responseData.refreshToken, {
              sameSite: 'lax',
              secure: false,
              path: '/',
              domain: 'localhost',
            })

            window.location.href = "/home";
           
          }

        }catch (error) {
          console.log(error);
        }
			}
    }
  }

	const handleGoogleSubmit = async () => {
		window.location.href = "http://localhost:3001/auth/google/login";
	}

  return (
    <>
      <GoBack />
      <div className="mt-14 flex flex-col items-center justify-center">

        <Image 
          src={'/img/logov4.svg'} 
          width={640} 
          height={640} 
          alt="logo-animeWave" 
          className="ml-32" 
        />

        <div className="bg-white rounded-3xl shadow-2xl w-4/12 h-fit flex flex-col items-center">

          <h1 className={`${kanit.className} pt-2 text-3xl self-start pl-6 text-black`}>Login</h1>

          <form action="" className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="w-full">
              <div>
                <Input label="Email" placeholder="Digite seu Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                {emailError && <Text content={emailError} color="red" size="0.75rem" marginBottom="0" />}
              </div>

              <div>
                <Input label="Senha" placeholder="Digite sua senha" type="password" onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <Text 
                  content={passwordError} 
                  color="red" 
                  size="14px" 
                  />}
              </div>
            </div>

            <a href="/" className={`pb-4 pl-6 font-medium text-blue-500 ${kanit.className} underline`}>Esqueci minha senha</a>

            {error && <Text
							content={error}
							color="red"
							size="14px"
					  />}

            <div className="mt-6 flex flex-col gap-3 items-center pb-3">
              <Button 
                color="#006400" 
                text="Acessar conta" 
                type="submit"
              />

              <p className={`${kanit.className} text-black text-lg`}>OU</p>

              <Button 
                color="white"
                text="Entrar com Google"
                type="button"
                border="black solid 2px"
                textColor="black"
                icon="/img/google.svg"
                onClick={handleGoogleSubmit}
						  />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

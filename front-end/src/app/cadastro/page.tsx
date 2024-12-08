'use client'

import Image from "next/image";

import { Kanit } from "next/font/google";
import React, { useState } from "react";

import "./style.css";

import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import Text from "@/components/Text";
import Link from "next/link";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

interface Error {
	message: string;
	path: Array<string>;
}

export default function Cadastro() {
	const [ name, setName ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ confirmPassword, setConfirmPassword ] = useState("");

	const [ nameError, setNameError ] = useState("");
	const [ emailError, setEmailError] = useState("");
	const [ passwordError, setPasswordError ] = useState("");
	const [ error, setError ] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError("");
		setNameError("");
		setEmailError("");
		setPasswordError("");

		if(!name || !email || !password) {
			setError('Preencha todos os campos!');
		
		}else if(password !== confirmPassword) {
			setPasswordError("As senhas digitadas devem ser iguais!");
		
		} else {
			const response = await fetch("http://localhost:3001/novo-usuario", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({name, email, password})
			});

			const data = await response.json();

			if(data.error) {
				data.error.map((err: Error) => {
					switch(err.path[0]) {
						case 'name':
							setNameError(err.message);
							break;

						case 'email':
							setEmailError(err.message);
							break;

						case 'password':
							setPasswordError(err.message);
							break;
					}
				})
			}else {
				window.location.href = '/login';
			}
		}

	};

	const handleGoogleSubmit = async () => {
		window.location.href = "http://localhost:3001/auth/google/login";
	}

	return (
		<>
			<div className="mt-10 registerForm">
			
				<Image 
					src={'/img/logov4.svg'}
					width={640}
					height={640}
					alt="logo-animeWave"
					
					className="ml-24"
				/>				

				<form onSubmit={handleSubmit}
				className="h-fit w-8/12 rounded-3xl mt-0 flex flex-col bg-white p-7 shadow-2xl">
					<h1 className={kanit.className}>Cadastro</h1>
			
					<div className="flex w-full">
						<div className="flex flex-col w-6/12">
							<Input
								label="Nome*"
								placeholder="Ex: José Santos"
								type="text"
								onChange={(e) => setName(e.target.value)}
							/>

							{nameError && <Text
								content={nameError}
								color="red"
								size="14px"
							/>}
						</div>

						<div className="flex flex-col w-6/12">
							<Input
								label="Email*"
								placeholder="Ex: jose.santos@email.com"
								type="email"
								onChange={(e) => setEmail(e.target.value)}
							/>

							{emailError && <Text
								content={emailError}
								color="red"
								size="14px"
							/>}
						</div>
					</div>

					<div className="flex w-full mb-5">
						<div className="flex flex-col w-6/12">
							<Input
								label="Senha*"
								placeholder="Digite sua senha"
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>


							{passwordError && <Text
								content={passwordError}
								color="red"
								size="14px"
							/>}
						</div>

						<div className="flex flex-col w-6/12">
							<Input
								label="Confirme sua senha*"
								placeholder="Digite novamente sua senha"
								type="password"
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>

							{passwordError && <Text
								content={passwordError}
								color="red"
								size="14px"
							/>}
						</div>
					</div>

					{error && <Text
							content={error}
							color="red"
							size="14px"
					/>}

					<div className="flex flex-col items-center self-center gap-7">
						<Link
							href="/login"
							className={kanit.className}
							style={{
								color: "#1E90FF",
								textDecoration: "underline"
							}}

						>Já tem uma conta? Clique aqui para acessar</Link>

						<Button 
							color="#006400"
							text="Criar conta"
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
		</>

	);
}


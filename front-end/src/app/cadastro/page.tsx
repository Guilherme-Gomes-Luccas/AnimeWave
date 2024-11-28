'use client'

import Image from "next/image";

import { Kanit } from "next/font/google";
import React, { useState } from "react";

import "./style.css";

import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import Text from "@/components/Text";
import Link from "next/link";
import GoBack from "@/components/GoBack";

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

	const messageError: Array<Error> = [];

	const errorExists = (path: string): string[] => {
		console.log('aaaaaaaaaaaaaa')
		const error = messageError.map((message) => {
			console.log(message)
		})

		console.log("erroo: ", error)
		return ['error']
	} 
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError("");

		if(!name || !email || !password) {
			setError('Preencha todos os campos!');
		
		}else if(password !== confirmPassword) {
			/*console.log('aaa')
			messageError.push({
				message: "As senhas digitadas devem ser iguais",
				path: "confirmPassword",
			})*/

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
			}
		}

	};
	return (
		<>
			<GoBack />
			<div className="registerForm">
			
				<Image 
					src={'/img/logov4.svg'}
					width={640}
					height={640}
					alt="logo-animeWave"
					
					className="ml-24"
				/>				

				<form onSubmit={handleSubmit}
				className="h-fit w-5/12 rounded-3xl mt-0 flex flex-col bg-white p-7 shadow-2xl mb-3">
					<h1 className={kanit.className}>Cadastro</h1>
					
					<div>
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

						<Input
							label="Email*"
							placeholder="Ex: jose.santos@email.com"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
						/>

						{emailError && <Text
							content={passwordError}
							color="red"
							size="14px"
						/>}

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

						{error && <Text
							content={error}
							color="red"
							size="14px"
						/>}
					</div>
					
				</form>
			</div>
		</>

	);
}
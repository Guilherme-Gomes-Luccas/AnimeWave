import Image from "next/image";

import { Kanit } from "next/font/google";
import React from "react";

import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

export default function Cadastro() {
	return (
		<>
			<GoBack />
			<div className="h-screen w-screen flex flex-col items-center justify-center">
				

				<Image 
					src={'/img/logov4.svg'}
					width={480}
					height={480}
					alt="logo-animeWave"
				/>

			<form className="h-3/4 w-5/12 rounded-3xl mt-0 flex flex-col bg-white p-7 gap-6 shadow-2xl">
				<h1 className={kanit.className} style={style.title}>Cadastro</h1>
				
				<div>
					<Input
						label="Nome"
						placeholder="Ex: José Santos"
						type="text"
					/>

					<Input
						label="Email"
						placeholder="Ex: jose.santos@email.com"
						type="email"
					/>

					<Input
						label="Senha"
						placeholder="Digite sua senha"
						type="password"
					/>

					<Input
						label="Confirme sua senha"
						placeholder="Digite novamente sua senha"
						type="password"
					/>
				</div>
				
				

				<div className="flex flex-col items-center self-center gap-7">
					<Link
						href="/login"
						className={kanit.className}
						style={style.link}

					>Já tem uma conta? Clique aqui para acessar</Link>

					<Button 
						color="#006400"
						text="Criar conta"
					/>
				</div>
				
			</form>
		</div>
	);
}

const style ={
	title: {
		color: "#000000",
		fontSize: "28px",
	},

	link: {
		color: "#1E90FF",
		textDecoration: "underline",
	}
};
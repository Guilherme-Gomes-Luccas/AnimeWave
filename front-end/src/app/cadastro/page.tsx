import Image from "next/image";

import { Kanit } from "next/font/google";
import React from "react";

import Button from "@/components/Button";
import Input from "@/components/Input/Input";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

export default function Cadastro() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center">

			<Image 
				src={'/img/logov4.svg'}
				width={480}
				height={480}
				alt="logo-animeWave"
			/>

			<form className="h-3/4 w-5/12 rounded-3xl mt-0 flex flex-col bg-white p-7 gap-6 shadow-2xl">
				<h1 className={kanit.className} style={style.title}>Cadastro</h1>

				
				<Input 
					label="Nome completo"
					placeholder="José Santos"
				/>

				<div className="self-center">
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
		fontSize: "26px",
	},

	text: {
		color: "#000000",
		fontSize: "20px",
		weight: "300",
		marginBottom: "8px"
	},

	input: {
		borderRadius: "15px",
		background: "#D9D9D9",
		height: "30px",
	}
};
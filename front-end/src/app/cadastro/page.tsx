import Image from "next/image";
import CSS from "csstype";

import { Kanit } from "next/font/google";
import React from "react";

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

			<form className="h-3/4 w-5/12 rounded-3xl mt-0 flex flex-col bg-white p-7 gap-6">
				<h1 className={kanit.className} style={style.title}>Cadastro</h1>

				<div className="flex flex-col p-5">
						<label className={kanit.className} style={style.text}>Nome completo:</label>
						<input style={style.input} type="text" placeholder="José Santos"/>
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
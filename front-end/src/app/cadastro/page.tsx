import Image from "next/image";

export default function Cadastro() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">

			<Image 
				src={'/img/logov4.svg'}
				width={500}
				height={500}
				alt="logo-animeWave"
			/>

			<form className="h-96 w-96 border-2 border-black mt-0">
				<h1>Cadastro</h1>
			</form>
		</div>
	);
}

const style = {
	form: {
		border: "black",
		width: "100px",
		height: "100px"
	}
};
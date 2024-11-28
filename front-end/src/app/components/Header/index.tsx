import React from "react";
import Image from "next/image";
import logo from "./logo.svg";
import "./style.css"
import Link from "next/link";




export default function Header() {
    return (
        <div className='flex justify-between bg-header-blue w-full bg-blue-950 '>
          
                <Image
                    className="flex self-baseline px-9 pt-3 "
                    src={logo}
                    width={480}
                    height={400}
                    alt="logo-animeWave"
                />

    
      
            <div className="flex justify-center self-center  px-28 font-kanit text-xl ">
                <Link href={""} className="text-white px-4 mx-14   "> Cadastro</Link>
                <Link href={""} className="text-white px-4"> Login</Link>
            </div>
        </div>
    )
}

const style = {
    header: {
        backgroundColor: '#black',
    }

};
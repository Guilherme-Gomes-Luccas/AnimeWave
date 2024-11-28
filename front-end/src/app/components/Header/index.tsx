import React from "react";
import Image from "next/image";
import logo from "./logo.svg";
import "./style.css"
import Link from "next/link";




export default function Header() {
    return (
        <div className='flex bg-header-blue w-full bg-blue-950'>
          
                <Image
                    src={logo}
                    width={480}
                    height={400}
                    alt="logo-animeWave"
                />

    
      
            <div className="flex justify-end ">
                <Link href={""} className="text-white"> Cadastro</Link>
                <Link href={""} className="text-white"> Login</Link>
            </div>
        </div>
    )
}

const style = {
    header: {
        backgroundColor: '#black',
    }

};
import React from "react";
import Image from "next/image";
import logo from "./logo.svg";




export default function Header() {
    return (
        <div className='bg-header-blue w-full bg-[#--dark-blue, linear-gradient(90deg, rgba(5, 28, 78, 0.85) 11%, rgba(5, 28, 80, 0.95) 53%, rgba(1, 19, 57, 0.85) 86%)]'    >
            <Image
                src={logo}
                width={480}
                height={480}
                alt="logo-animeWave"
            />
        </div>
    )
}

const style = {
    header: {
        backgroundColor:'#black',
    }
    
};
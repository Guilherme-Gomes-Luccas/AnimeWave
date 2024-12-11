'use client'

import React, { useState } from "react";
import Image from "next/image";
import logo from "./logo.svg";
import "./style.css"
import { Kanit } from "next/font/google";
import Link from "next/link";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarProps } from "@/components/Sidebar/Sidebar";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

export default function Header({username, photo, id_user}: SidebarProps) {
    console.log(id_user)
    const [ sideBar, setSideBar ] = useState(false);

    const showSideBar = () => {
        setSideBar(!sideBar);
    }

    return (
        <div className='flex justify-between items-start bg-header-blue w-full h-24 bg-blue-950 fixed top-0 z-50'>
          
            <Image
                className="mt-2"
                src={logo}
                width={300}
                height={300}
                alt="logo-animeWave"
            />
            
            <Sidebar username={username} photo={photo} />
        </div>
    )
};
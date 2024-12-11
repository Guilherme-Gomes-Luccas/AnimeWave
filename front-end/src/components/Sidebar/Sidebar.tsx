'use client'

import { useState } from "react";
import Image from "next/image";

import { Kanit } from "next/font/google";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

export interface SidebarProps {
  username: string;
  photo?: string;
  id_user?: string
}

export default function Sidebar({username, photo, id_user}: SidebarProps) {
  const [ isOpen, setIsOpen ] = useState(false);

  const showSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-start items-start mt-6 w-fit bg-blue-950">
      <Image 
          src={photo || '/img/avatar.svg'}
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full cursor-pointer mr-6 ml-6"
          onClick={showSideBar}
      />

      {isOpen ? (
        <div className="h-screen flex flex-col gap-8">
          <p className={`text-white ${kanit.className} mt-3 mr-7`}>{username}</p> 
          <p className={kanit.className} style={style.text}>Perfil</p>
          <p className={kanit.className} style={style.text} onClick={() => {window.location.href = "/my-posts"}}>Minhas publicações</p>
          <p className={kanit.className} style={style.text}>Sair</p>
        </div>
      ) :
      
      <>
      </>}
    </div>
  )
}

const style = {
  text: {
    color: '#FFFFFF',
    marginTop:'1.5rem',
    marginRight: '1.2rem',
    cursor: 'pointer'
  }
}
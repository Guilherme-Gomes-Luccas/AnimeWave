
import logo from "./logo.svg";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/16/solid";
export default function Sidebar() {
    return (
        <div className="w-64 p-4 bg-gray-300 shadow-sm flex flex-col">

<Image
              className="mt-2"
              src={logo}
              width={300}
              height={300}
              alt="logo-animeWave"
          />
          
     
          
    
    

            
            <div className="flex-1">


                <ul className="space-y-2 p-4 text-black font-poppins mt-12">


                    <HomeIcon className="size-9"/>
                    <li className=" font-semibold  hover:text-yellow-500 mt-12">Home</li>
                    <li className="font-semibold  hover:text-yellow-500 mt-12">Pesquisar</li>
                    <li className="font-semibold  hover:text-yellow-500 mt-12">Notificações</li>
                    <li className="font-semibold  hover:text-yellow-500 mt-12">Mensagens</li>
                    <li className="font-semibold  hover:text-yellow-500">Perfil</li>
                </ul>
            </div>
            <button className="bg-green-500 text-white py-2 px-4 m-4 rounded-sm hover:bg-green-600">
                Criar Publicação
            </button>

        </div>
    )
}
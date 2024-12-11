"use-client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { Placeholder, TagInput } from "rsuite";

interface ModalPostProps {
  text: string;
  placeholder: string;
  id_post: string;
}
export default function ModalPost() {
 

  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" >
          <div className="bg-backgroundAnimeWave p-6 rounded shadow-lg w-full max-w-lg" >
            <Image 
              src='/img/loading.gif'
              width={100}
              height={100}
              alt='loading'
            /> 
                  
          </div>
      </div>
    
    </>
    
  )
}
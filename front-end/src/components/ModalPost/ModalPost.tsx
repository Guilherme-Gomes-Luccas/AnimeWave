"use-client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { Placeholder, TagInput } from "rsuite";

interface ModalPostProps {
  text: string;
  placeholder: string;
  id_post: string;
}
export default function ModalPost({text, placeholder, id_post}: ModalPostProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [postContent, setPostContent] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');
  let content;

  const getPostData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/get-posts/${id_post}`, {
        method: 'POST'
      });

      const responseData = await response.json();
      
      setPostContent(responseData.content);
      content = responseData.content;

    }catch (error) {
      console.log(error);
    }
  }

  getPostData();

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" >
          <div className="bg-backgroundAnimeWave p-6 rounded shadow-lg w-full max-w-lg" >
            <h2 className="text-lg text-black font-bold mb-4">{text}</h2>
  
            {/*Título*/}
    
            {/* <TagInput 
              trigger={['Enter', 'Comma', 'Space']}
              className="w-full border border-gray-500 text-black bg-backgroundAnimeWave rounded-md p-2 mb-4"
              placeholder="Hashtags da publicação (separadas por vírgulas)"
            /> */}
            {/* <input
              type="text"
              className="w-full border border-gray-500 text-black bg-backgroundAnimeWave rounded-md p-2 mb-4"
              placeholder="Hashtags da publicação (separadas por vírgulas)"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            /> */}
  
            {/*Conteúdo*/}
  
            <textarea
              className="w-full border border-gray-500 text-black bg-backgroundAnimeWave rounded-md p-2 mb-4"
              rows={5}
              value={content}
              onChange={(e) => setPostContent(e.target.value)}
            />
  
            {/*Ações*/}
  
            <div className="flex justify-between items-center">
  
              <div className="flex justify-end items-center gap-4">
                          
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 "
                  onClick={() => setIsModalOpen(false)}
                >
                  Postar
                </button>
  
                <button
                  className=" px-4 py-2 bg-gray-500 rounded hover:bg-gray-300 text-white"
                  onClick={() => setIsModalOpen(false)} >
                    Deletar
                </button>

                <button
                  className=" px-4 py-2 bg-gray-500 rounded hover:bg-gray-300 text-white"
                  onClick={() => setIsModalOpen(false)} >
                    Cancelar
                </button>
            </div>
          </div>
        </div>
      </div>
      )}
    
    </>
    
  )
}
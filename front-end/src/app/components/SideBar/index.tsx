
"use client"

import logo from "./logo.svg";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/16/solid";
import { useState } from "react";



interface Post {
    id: number;
    username: string;
    handle: string;
    content: string;
}

export default function Sidebar() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPostContent, setNewPostContent] = useState('');

    const handleCreatPost = () => {
        if (newPostContent.trim() !== '')
            return;

        const newPost: Post = {
            id: Date.now(),
            username: 'Guigahoul',
            handle: '@DraonBallBalls',
            content: newPostContent
        };

        setPosts([newPost, ...posts]);
        setNewPostContent('');
        setIsModalOpen(false);


    };



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


                    <HomeIcon className="size-9" />
                    <li className=" font-semibold  hover:text-yellow-500 mt-12">Home</li>
                    <li className="font-semibold  hover:text-yellow-500 mt-12">Pesquisar</li>
                    <li className="font-semibold  hover:text-yellow-500 mt-12">Notificações</li>
                    <li className="font-semibold  hover:text-yellow-500 mt-12">Mensagens</li>
                    <li className="font-semibold  hover:text-yellow-500">Perfil</li>
                </ul>
            </div>




            <button className="bg-green-500 text-white py-2 px-4 m-4 rounded-sm hover:bg-green-600"
                onClick={() => setIsModalOpen(true)}
            >
                Criar Publicação
            </button>


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" >
                    <div className="bg-white p-6 rounded shadow-lg w-96" >
                        <h2 className="text-lg font-semibold mb-4">Criar Publicação</h2>
                        <textarea
                            className="w-full border border-gray-300 rounded-md p-2 mb-4"
                            rows={5}
                            placeholder="Digite o conteúdo da publicação"
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                        />

                        <div className="flex justify-end">
                            <button
                                className="mr-2 px-4 py-2 bg-gray-200 rounded"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancelar
                            </button>

                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded"
                                onClick={handleCreatPost}
                            >
                                Postar

                            </button>

                        </div>




                    </div>



                </div>

            )}

        </div>



    )
}

"use client"
import Link from "next/link";
import logo from "./logo.svg";
import UploadImage from "./UploadImage.svg";
import Image from "next/image";
import { useState } from "react";

import { MdOutlineYoutubeSearchedFor, MdHome } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";

interface Error {
    message: string;
    path: Array<string | number>;
}

export default function Sidebar() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [newPostTitle, setNewPostTitle] = useState('');

    const [ titleError, setTitleError ] = useState('');
    const [ contentError, setContentError ] = useState('');
    const [ error, setError ] = useState("");

    const handleCreatPost = async () => {
        if (newPostContent.trim() !== '' || newPostContent.trim() !== '') {
            return;
        }

        if (!newPostTitle || !newPostContent) {
            setError('Preencha todos os campos!')
        } else {
            const newPost: Post = {
                id_post: "abcd",
                id_user: "240b4088-7e5d-4615-8684-25b64bbb78d6",
                date: Date.now(),
                tag: '@DragonBallBalls',
                title: `${newPostTitle}`,
                content: `${newPostContent}`,
            };

            const response = await fetch("http://localhost:3001/novo-post", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newPost)
			});

            const data = await response.json();

			if(data.error) {
				data.error.map((err: Error) => {
					switch(err.path[0]) {
						case 'title':
							setTitleError(err.message);
							break;

						case 'content':
							setContentError(err.message);
							break;
					}
				})
            } else {
                setPosts([newPost, ...posts]);
                setNewPostContent('');
                setNewPostTitle('');
                setIsModalOpen(false);
                window.location.href = '/home';
            }
        }
    };

    return (

        <div className="w-[25%] p-4 bg-gray-300 shadow-sm flex flex-col">
            <Image
                className="mt-2"
                src={logo}
                width={300}
                height={300}
                alt="logo-animeWave"
            />

            {/* SideBarMenu */}
            <div className="flex-1">


                <ul className="flex flex-col space-y-2 p-4 text-black font-poppins mt-12">

                    <div className="flex flex-row">
                        <MdHome className="size-9 mb-2 " />
                        <Link className="font-semibold hover:text-yellow-500 ml-3 mb-1 mt-3" href="/Home">Home</Link>
                    </div>


                    <div className="flex flex-row">
                        <MdOutlineYoutubeSearchedFor className="size-9 mb-2" />
                        <Link className="font-semibold hover:text-yellow-500 ml-3 mb-1 mt-3" href="/Pesquisar"  >Pesquisar</Link>
                    </div>

                    <div className="flex flex-row">
                        <IoMdNotifications className="size-9 mb-2 " />
                        <Link className="font-semibold hover:text-yellow-500 ml-3 mb-1 mt-3" href="/Notificações">Notificações</Link>
                    </div>

                    <div className="flex flex-row">
                        <FaEnvelope className="size-7 mb-2 ml-1" />
                        <Link className="font-semibold hover:text-yellow-500 ml-4 mb-1 mt-3" href="/Mensagens">Mensagens</Link>
                    </div>

                    <div className="flex flex-row">
                        <FaUser className="size-7 mb-2 ml-1" />
                        <Link className="font-semibold hover:text-yellow-500 ml-4 mb-1 mt-3" href="/Perfil">Perfil</Link>
                    </div>

                    <div className="flex flex-row">
                        <GiExitDoor className="size-8 mb-2 ml-1" />
                        <Link className="font-semibold hover:text-yellow-500 ml-3 mb-1 mt-3" href="/Sair">Sair</Link>
                    </div>

                </ul>
            </div>


            <button className=" flex items-center justify-center gap-2 bg-green-500 text-white text-lg font-normal py-2 rounded-full hover:bg-green-600 transition duration-300 mb-72"
                onClick={() => setIsModalOpen(true) }
            >
                Criar Publicação
            </button>

            {/* Modal */}
            {isModalOpen && (

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" >
                    <div className="bg-backgroundAnimeWave p-6 rounded shadow-lg w-full max-w-lg" >
                        <h2 className="text-lg text-black font-bold mb-4">Criar Publicação</h2>

                        {/*Título*/}

                        <input
                            type="text"
                            className="w-full border border-gray-500 text-black bg-backgroundAnimeWave rounded-md p-2 mb-4"
                            placeholder="Digite o título da publicação"
                            value={newPostTitle}
                            onChange={(e) => setNewPostTitle(e.target.value)}
                        />

                        {/*Conteúdo*/}

                        <textarea
                            className="w-full border border-gray-500 text-black bg-backgroundAnimeWave rounded-md p-2 mb-4"
                            rows={5}
                            placeholder="Digite o conteúdo da publicação"
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                        />


                        {/*Ações*/}

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                          
                         
                                <button className="text-gray-400 hover:text-gray-600 ml-56">
                                    <Image
                                        src={UploadImage}
                                        alt="Imagem de upload"
                                        className="w-6 h-6 "
                                        width={24}
                                        height={24}
                                            />
                                </button>
                            </div>

                            <div className="flex justify-end items-center gap-4">
                              

                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 "
                                    onClick={handleCreatPost}
                                >
                                    Postar
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
        </div>
    )
}
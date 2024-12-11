"use client";

import Image from "next/image";
import { Kanit } from "next/font/google";
import { useEffect, useState } from "react";
import ModalPost from "@/components/ModalPost/ModalPost";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

export interface PostCardProps {
  id: string;
  avatar: string;
  username: string;
  content: string;
  hashtags?: string[];
  width?: number;
  myPosts?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ id, avatar, username, content, hashtags, width, myPosts }) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [postContent, setPostContent] = useState(content);

  const getPostData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/get-posts/${id}`, {
        method: 'POST'
      });

      const responseData = await response.json();
      
      setPostContent(responseData.content);

    }catch (error) {
      console.log(error);
    }
  }

  const editPost = async () => {
    try {
      const response = await fetch(`http://localhost:3001/edit-post/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: postContent
        })
      });

      const responseData = await response.json();
      setModalIsOpen(false);
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async () => {
    try {
      const response = await fetch(`http://localhost:3001/delete-post/${id}`, {
        method: 'DELETE'
      });

      const responseData = await response.json();
      console.log(responseData);
      setModalIsOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPostData();
  }, [id]);

  return (
    <div className={`flex bg-white rounded-lg shadow-md p-4 mb-4 w-[${width}px] mx-auto cursor-pointer text-wrap h-fit`}>

        <div className="w-12 h-12 flex flex-col gap-6">
          <Image
            src={avatar || '/img/avatar-black.svg'}
            alt={`${username}'s avatar`}
            width={48}
            height={48}
            className="rounded-full"
          />

          {myPosts && (
            <Image 
              src= '/img/edit_icon.svg'
              width={25}
              height={25}
              alt='edit icon'
              className="cursor-pointer mr-20"
              onClick={() => setModalIsOpen(true)}
            />
          )}
        </div>
                     
        <div className="w-full ml-4 text-wrap" onClick={() => window.location.href = `/posts?id=${id}`}>
       
          <div className="flex items-center justify-between">
            <h3 className={`font-semibold text-black ${kanit.className}`}>{username}</h3>
          </div>
       
          <p className="text-gray-700 mt-2 text-sm mb-4 ">{postContent || content}</p>
        {hashtags && (
          <div className="flex flex-wrap gap-3 w-full">
            {hashtags.map((hashtag, index) => (
              <p key={index} className="text-black font-bold text-sm">{hashtag}</p>
            ))}
        
          </div>
        )}
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" >
          <div className="bg-backgroundAnimeWave p-6 rounded shadow-lg w-full max-w-lg" >
            <h2 className="text-lg text-black font-bold mb-4">Editar post</h2>
        
              <textarea
                className="w-full border border-gray-500 text-black bg-backgroundAnimeWave rounded-md p-2 mb-4"
                rows={5}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
                
              <div className="flex justify-between items-center">
        
                <div className="flex justify-end items-center gap-4">
                                
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 "
                    onClick={editPost}
                  >
                    Salvar
                  </button>
        
                  <button
                    className=" px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-white"
                    onClick={deletePost} >
                      Deletar
                  </button>
      
                  <button
                    className=" px-4 py-2 bg-gray-500 rounded hover:bg-gray-300 text-white"
                    onClick={() => setModalIsOpen(false)} >
                      Cancelar
                  </button>
                </div>
              </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PostCard;
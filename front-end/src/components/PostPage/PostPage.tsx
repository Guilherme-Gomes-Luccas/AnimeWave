"use client"

import { useEffect, useState } from "react";
import { Post } from "@/app/home/page";
import { Kanit } from "next/font/google";
import Image from "next/image";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

interface PostPageProps {
  id: string | null;
  editIcon?: boolean;
  deleteButton?: boolean;
}
export default function PostPage({id, editIcon, deleteButton}: PostPageProps) {
  const [ error, setError ] = useState("");
  const [ post, setPost ] = useState<Post | null>(null);
  const getPost = async (id: string | null) => {
    try {
      const response = await fetch(`http://localhost:3001/get-posts/${id}`, {
        method: 'POST'
      });
  
      const responseData = await response.json();
      setPost(responseData);
    } catch (error) {
      console.log(error);
      setError("Não foi possível carregar o post");
    }
  }

  useEffect(() => {
    getPost(id);
  })

  return (
    <div className="w-[700px] h-fit bg-white rounded-md p-10 flex flex-col gap-5">
      <div className="flex items-center gap-5 w-fit">
        <Image 
          src={post?.user_photo ||'/img/avatar-black.svg'}
          width={48}
          height={48}
          alt={'user_photo'}
          className="rounded-full"
        />
        <h1 className={`font-semibold text-black ${kanit.className}`}>{post?.username}</h1>
        <div className="ml-24 flex gap-3 justify-end w-fit">
          {post?.hashtags && post?.hashtags.map((hashtag: string) => (
            <p key={hashtag} className="text-black font-bold text-sm">{hashtag}</p>
          ))}
        </div>

      </div>
      
      <Image 
        src={post?.photo ||'/img/logov4.svg'}
        width={500}
        height={500}
        alt={'imagem do post'}
        className="self-center rounded-sm"
      />
      <p className={`${kanit.className} text-black`}>{post?.content}</p>
    </div>
  )
}
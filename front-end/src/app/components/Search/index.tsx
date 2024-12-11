'use client'

import { useState } from "react";
import SearchBar from "../SearchBar";
import { PostCardProps } from "../PostCard";
import PostCard from "../PostCard";
import { Post } from "../../home/page";
import Loading from "@/components/Loading/Loading";
import Text from "@/components/Text";
import { Kanit } from "next/font/google";
import GoBack from "@/components/GoBack";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

interface SearchProps {
  items: Array<string | undefined>;
  posts: Array<PostCardProps>;
  width?: number;
  gap?: string;
  myPosts?: boolean;

}
export default function Search({items, posts, width, gap, myPosts}: SearchProps) {
  const [ searchPosts, setSearchPosts ] = useState(posts);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ messageError, setMessageError ] = useState("");

  const search = async (query: string) => {
    setMessageError("");

    if(query) {
      setSearchPosts([]);
      setIsLoading(true);

      try {

        const response = await fetch(`http://localhost:3001/get-posts/search/${encodeURIComponent(query)}`, {
          method: 'POST',
        });
  
        const responseData = await response.json();
  
        if (responseData.length === 0) {
          setIsLoading(false);
          setMessageError("Nenhum post encontrado");
        
        } else {
          const updatedPosts: PostCardProps[] = responseData.map((post: Post) => ({
            avatar: post.user_photo,
            username: post.username,
            content: post.content,
            hashtags: post.hashtags
            })
          );
          
          setIsLoading(false);
          setSearchPosts(updatedPosts);
        }
  
      } catch (error) {
        console.log(error);
      }
    } else {
      setSearchPosts(posts);
    }
  }

  return (
    <>
      <div className=" bg-[#E1F8FF] flex flex-row  items-start justify-center pt-8">
        <SearchBar items={items} onSearch={search}/>
      </div>

      {myPosts && (
        <div className="flex items-center w-full justify-start ml-10">
          <GoBack url="/home"/>
            <p className={`text-black ${kanit.className} mt-3`}>Voltar</p>
          </div>
      )}

      {isLoading && (
        <div className="mt-20 flex w-full h-fit justify-center items-center">
          <Loading />
        </div>
     )}

     {messageError && (
      <div className="mt-16 flex w-full h-fit justify-center items-center">
        <Text 
        content={messageError}
        color="red"
        size="18px"
       />
      </div>
    )}

      <div className="bg-[#E1F8FF]  max-h-screen py-8">
        <div className={`grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-start gap-${gap || '5'} w-full mx-auto p-5`} >
          {searchPosts.map((post, index) => (
            <PostCard
              key={index}
              id={post.id}
              avatar={post.avatar}
              username={post.username}
              content={post.content}
              hashtags={post.hashtags}
              width={width || 400}
              myPosts={myPosts}
            />
          ))}
        </div>
      </div>
    </>
  )
}
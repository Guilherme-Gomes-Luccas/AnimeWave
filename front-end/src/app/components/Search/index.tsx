'use client'

import { useState } from "react";
import SearchBar from "../SearchBar";
import { PostCardProps } from "../PostCard";
import PostCard from "../PostCard";
import { Post } from "../../home/page";

interface SearchProps {
  items: Array<string | undefined>;
  posts: Array<PostCardProps>;
}
export default function Search({items, posts}: SearchProps) {
  const [ searchPosts, setSearchPosts ] = useState(posts);

  const search = async (query: string) => {
    try {

      const response = await fetch(`http://localhost:3001/get-posts/search/${encodeURIComponent(query)}`, {
        method: 'POST',
      });

      const responseData = await response.json();
      const updatedPosts: PostCardProps[] = responseData.map((post: Post) => ({
          avatar: post.user_photo,
          username: post.username,
          content: post.content,
          hashtags: post.hashtags
        })
      );

      setSearchPosts(updatedPosts);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className=" bg-[#E1F8FF] flex flex-row  items-start justify-center pt-8">
        <SearchBar items={items} onSearch={search}/>
      </div>

      <div className="bg-[#E1F8FF]  max-h-screen py-8">
        <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-start gap-1 w-full mx-auto p-5" >
          {searchPosts.map((post, index) => (
            <PostCard
              key={index}
              avatar={post.avatar}
              username={post.username}
              content={post.content}
              hashtags={post.hashtags}
            />
          ))}
        </div>
      </div>
    </>
  )
}
"use client"
import GoBack from "@/components/GoBack";
import PostPage from "@/components/PostPage/PostPage";
import { Post } from "../home/page";
import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import PostList from "../components/PostList";
import { useCookies } from "next-client-cookies";


export default function Posts() {
  const cookies = useCookies();

  const [id, setId] = useState<string | null>("");
  let refreshToken = cookies.get('refreshToken');

  useEffect(() => {
    const url = new URL(window.location.href);
    setId(url.searchParams.get('id'));
  })
  return (
    <div className="flex">
      <Sidebar refreshToken={refreshToken}/>
      <div className="h-screen w-screen flex flex-col">
        <GoBack url="/home"/>

        <div className="w-full flex justify-center mt-10">
          <PostPage id={id} />
        </div>
      </div>
      <PostList />
    </div>
  )
}

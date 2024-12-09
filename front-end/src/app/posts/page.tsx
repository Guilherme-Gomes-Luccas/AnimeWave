"use client"
import GoBack from "@/components/GoBack";
import PostPage from "@/components/PostPage/PostPage";
import { Post } from "../home/page";
import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import PostList from "../components/PostList";

export default function Posts() {
  const [id, setId] = useState<string | null>("");

  useEffect(() => {
    const url = new URL(window.location.href);
    setId(url.searchParams.get('id'));
  })
  return (
    <div className="flex">
      <Sidebar />
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
<<<<<<< HEAD
import Cadastro from "./cadastro/page";
=======
import Image from "next/image";
import SideBar from "./components/Sidebar";
import PostBar from "./components/Post";
import Post from "./components/Post";
>>>>>>> posts


export default async function Page() {
  return (
<<<<<<< HEAD
    <Cadastro />
  )
=======
    <div className="flex h-screen bg-gray-100">
      <SideBar />

      <main className="flex-1 p-6">
        <Post />
      </main>
    </div>

  );
>>>>>>> posts
}

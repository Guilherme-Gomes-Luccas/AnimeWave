import Image from "next/image";
import SideBar from "./components/SideBar";
import PostBar from "./components/PostBar";

export default function Home() {
  return (
    <div className="flex ">
      <div className="">
        <SideBar />
      </div>

      <div>
        <PostBar />
      </div>
    </div>

  );
}

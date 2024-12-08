
import Image from "next/image";
import imgPost from "./ImagePost.svg";
import { IoMdReturnLeft } from "react-icons/io";
import Link from "next/link";



interface PostCardProps {
    avatar: string;
    handle: string;
    username: string;
    content: string;
    title: string;
}


const CreatePost: React.FC<PostCardProps> = ({ avatar, handle, username, content, title }) => {
    return (

        <div className="bg-white shadow-md rounded-lg p-6 space-y-4 mb-3">
            <div className="flex items-center space-x-4 text-black font-bold ">
                <IoMdReturnLeft
                    className="text-black size-8"
                />
                <Link href={"retornar para home"}>Home</Link>
            </div>
            <div className="flex items-center space-x-4 ">

                <img
                    src={avatar}
                    alt={`${username}'s avatar`}
                    width={48}
                    height={48}
                    className="rounded-full w-10 h-10 "
                />

                <div >
                    <p className="font-bold text-gray-800">{username}</p>
                    <p className="text-gray-500 text-sm">@{handle}</p>

                </div>
            </div>
            <div className=" rounded-md p-4 mb-4   ">

                <div className="flex justify-center items-center">
                    <div className=" inline-flex justify-center items-center mb-2  bg-gray-300 rounded-md text-black px-4 py-2">
                        <h2 className="text-lg font-bold text-black ">{title}</h2>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-5" >
                    <Image
                        src={imgPost}
                        width={400}
                        height={200}
                        alt="Foto do Post"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className=" inline-flex justify-center items-center mb-2  bg-gray-300 rounded-md text-black px-4 py-2">
                    <p className="text-black p-2 ">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;
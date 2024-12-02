import Image from "next/image";


interface PostCardProps {
    avatar: string;
    name: string;
    username: string;
    content: string;
}

const PostCard: React.FC<PostCardProps> = ({ avatar, name, username, content }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 space-y-4 ">
            <div className="flex items-center space-x-3">
                <Image
                    src={avatar}
                    alt={`${name}'s avatar`}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div>
                    <p className="font-bold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">@{username}</p>
                </div>
            </div>
            <p className="text-gray-800 leading-relaxed"> {content}</p>
        </div>
    );
};

export default PostCard;
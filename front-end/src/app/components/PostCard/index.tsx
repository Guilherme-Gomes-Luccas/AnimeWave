import Image from "next/image";


interface PostCardProps {
    avatar: string;
    handle: string;
    username: string;
    content: string;
}

const PostCard: React.FC<PostCardProps> = ({ avatar, username, handle, content }) => {
    return (
        <div className="flex bg-white rounded-lg shadow-md p-4 mb-4 w-full max-w-md mx-auto">
            <div className="w-12 h-12 flex-shrink-0">
                <Image
                    src={avatar}
                    alt={`${username}'s avatar`}
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                </div>


                     
      <div className="ml-4">
       
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold">{username}</h3>
          <span className="text-gray-500 text-sm">@{handle}</span>
        </div>
       
        <p className="text-gray-700 mt-2 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
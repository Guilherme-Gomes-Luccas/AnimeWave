"use client";

import Image from "next/image";
import { Kanit } from "next/font/google";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

export interface PostCardProps {
  id: string;
  avatar: string;
  username: string;
  content: string;
  hashtags?: string[];
  width?: number;
  myPosts?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ id, avatar, username, content, hashtags, width, myPosts }) => {
    return (
      <div className={`flex bg-white rounded-lg shadow-md p-4 mb-4 w-[${width}px] mx-auto cursor-pointer text-wrap h-fit`} onClick={() => window.location.href = `/posts?id=${id}`}>
        {myPosts && (
          <Image 
            src= '/img/edit_icon.svg'
            width={15}
            height={15}
            alt='edit icon'
            className="cursor-pointer"
          />
        )}
        <div className="w-12 h-12 flex-shrink-0">
          <Image
            src={avatar || '/img/avatar-black.svg'}
            alt={`${username}'s avatar`}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
                     
        <div className="w-full ml-4 text-wrap">
       
          <div className="flex items-center justify-between border-solid border-2 border-black">
            <h3 className={`font-semibold text-black ${kanit.className}`}>{username}</h3>
          </div>
       
          <p className="text-gray-700 mt-2 text-sm mb-4 ">{content}</p>
        {hashtags && (
          <div className="flex flex-wrap gap-3 w-full">
            {hashtags.map((hashtag, index) => (
              <p key={index} className="text-black font-bold text-sm">{hashtag}</p>
            ))}
        
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
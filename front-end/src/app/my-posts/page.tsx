import Sidebar from "../components/SideBar";
import { PostCardProps } from "../components/PostCard";
import Search from "../components/Search";
import { session } from "../api/auth/session";
import { cookies } from "next/headers";
import { Post } from "../home/page";
import { redirect } from "next/navigation";
import { get } from "http";
import ModalPost from "@/components/ModalPost/ModalPost";
import Header from "../components/Header";
import { Kanit } from "next/font/google";
import GoBack from "@/components/GoBack";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

export default async function MyPosts() {
  let isModalOpen = false;

  let myPosts = Array<PostCardProps>();
  let isLoading = false;
  let modalLoading = false;

  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  let accessToken = cookieStore.get('accessToken')?.value;

  console.log(refreshToken);

  const getPosts = async () => {
    myPosts = [];
    isLoading = true;

    accessToken = await getSession();

    try {
      const response = await fetch('http://localhost:3001/get-posts/my-posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      let responseData = await response.json();

      while(responseData.error) {
        accessToken = await getSession();
        const response = await fetch('http://localhost:3001/get-posts/my-posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        });
  
        responseData = await response.json();
      }

      responseData.map((post: Post) => {
        myPosts.push({
          id: post.public_id,
          avatar: post.user_photo,
          username: post.username,
          content: post.content,
          hashtags: post.hashtags
        })
      });

      isLoading = false;
    } catch (error) {
      console.log(error);
    }
  }

  const getSession = async () => {
    accessToken = await session(accessToken, refreshToken);

    if(accessToken == null) {
      redirect('/login');
    
    } else {
      return accessToken;
    }
  }

  const getUserData = async (accessToken: string) => {
    modalLoading = true;
    try {
      const response = await fetch('http://localhost:3001/get-user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
  
      const user = await response.json();

      return user;
  
    } catch (error) {
      
    }
  }

  const token = await getSession();
  const user = await getUserData(`${token}`);

  await getPosts();

  const postsHashtags = myPosts.map((post) => post.hashtags);
  const items = Array.from(new Set(postsHashtags.flat()));
  console.log('refresh: ', refreshToken);

  return (
    <div className="flex">
      <Sidebar refreshToken={refreshToken}/>

      <div className="flex flex-col w-full h-full items-center">
        <Search items={items} posts={myPosts} width={200} gap="5" myPosts={true}/>

      </div>
    </div>
  )
}
import Image from "next/image";
import Header from "../components/Header";
import feed from "../image/feed.png";
import SearchBar from "../components/SearchBar";
import { cookies } from "next/headers";
import { session } from "../api/auth/session";
import Footer from "../components/Footer";
import PostCard, { PostCardProps } from "../components/PostCard";
import Slider from "@/components/Slider/Slider";
import Post from "../components/Post";
import Search from "../components/Search";

export interface Post {
  public_id: string,
  id_user: string,
  user_photo: string,
  username: string,
  hashtags: Array<string>,
  content: string,
  photo: string
}

export default async function Home() {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');
  const posts = Array<PostCardProps>();
  const getSession = async () => {
    console.log('1: ', accessToken);
    accessToken = await session(accessToken?.value, refreshToken?.value);
    console.log('2: ', accessToken);
    return accessToken;
  }
  
  const getUserData = async (accessToken: string) => {
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

  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/get-posts', {
        method: 'GET'
      });

      const postData = await response.json();

      postData.map((post: Post) => {
        posts.push({
          avatar: post.user_photo,
          username: post.username,
          content: post.content,
          hashtags: post.hashtags
        })
      });

    } catch (error) {
      console.log(error);
    }
  }

  const token = await getSession();
  const userData = await getUserData(`${token}`);

  await getPosts();
  
  const postsHashtags = posts.map((post) => post.hashtags);
  const items = Array.from(new Set(postsHashtags.flat()));

  return (

    <div className="flex flex-col">

      <Header 
        username={userData.user.name}
        photo={userData.user.photo}
      />

      <div className=" w-full h-fit z-40">       
        <Slider />
      </div> 

      <Search items={items} posts={posts} />
      <Footer />
    
    </div>
  );
}

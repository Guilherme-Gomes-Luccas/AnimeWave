import Header from "../components/Header";
import { cookies } from "next/headers";
import { session } from "../api/auth/session";
import Footer from "../components/Footer";
import PostCard, { PostCardProps } from "../components/PostCard";
import Slider from "@/components/Slider/Slider";
import Search from "../components/Search";
import { redirect } from "next/navigation";

export interface Post {
  public_id: string,
  id_user: string,
  user_photo: string,
  username: string,
  hashtags: Array<string>,
  content: string,
  photo: string,
  date: string
}

export interface HomeProps {
  accessToken: string;
  refreshToken: string;
}

export default async function Home() {
  const cookieStore = await cookies();

  let accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const posts = Array<PostCardProps>();

  const getSession = async () => {
    accessToken = await session(accessToken, refreshToken);

    if(accessToken == null) {
      redirect('/login');
    
    } else {
      return accessToken;
    }
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
          id: post.public_id,
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

      <Search items={items} posts={posts}/>
      <Footer />
    
    </div>
  );
}

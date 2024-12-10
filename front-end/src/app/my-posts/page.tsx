import Sidebar from "../components/SideBar";
import { PostCardProps } from "../components/PostCard";
import Search from "../components/Search";
import { session } from "../api/auth/session";
import { cookies } from "next/headers";
import { Post } from "../home/page";
import { redirect } from "next/navigation";

export default async function MyPosts() {
  let myPosts = Array<PostCardProps>();
  let isLoading = false;

  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  let accessToken = cookieStore.get('accessToken')?.value;
  console.log(accessToken);

  const getPosts = async () => {
    myPosts = [];
    isLoading = true;

    accessToken = await getSession();
    console.log(accessToken);

    try {
      const response = await fetch('http://localhost:3001/get-posts/my-posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      let responseData = await response.json();

      console.log(responseData);
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

  await getPosts();
  const postsHashtags = myPosts.map((post) => post.hashtags);
  const items = Array.from(new Set(postsHashtags.flat()));

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col  w-full h-full border-solid border-2 border-black items-center">
        <Search items={items} posts={myPosts} width="200" gap="5"/>

      </div>
    </div>
  )
}
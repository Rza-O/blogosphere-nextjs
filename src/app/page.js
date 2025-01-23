import HomeCard from "@/components/HomeCard";
import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const { data: posts } = await axios('https://jsonplaceholder.typicode.com/posts');
  
  return (
    <div className="min-h-screen mt-8 w-11/12 mx-auto 2xl:container">
      <div className="text-center space-y-2">
        <h1 className="text-5xl">Welcome to Blogosphere!</h1>
        <p className="text-xl">Find all the latest blogs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {
          posts.map(post => <HomeCard key={post.id} post={post}></HomeCard>)
        }
      </div>
    </div>
  );
}

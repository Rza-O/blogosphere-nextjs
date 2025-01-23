import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const PostDetails = async ({ params }) => {
   const { postId } = await params;
   console.log(postId)
   const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)
   console.log(post)
   return (
      <div className='w-11/12 mx-auto 2xl:container my-8 2xl:min-h-screen min-h-[400px]'>
         <div className="card bg-base-100 max-w-2xl mx-auto shadow-xl">
            <div className="card-body">
               <p>User ID: { post.userId}</p>
               <h2 className="card-title">{post.title}</h2>
               <p>Post ID: { post.id}</p>
               <p>{ post.body}</p>
               <div className="card-actions">
                  <Link href='/'>
                     <button className="btn bg-black text-white">Go back</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PostDetails;
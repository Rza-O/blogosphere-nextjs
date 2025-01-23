import Link from 'next/link';
import React from 'react';

const HomeCard = ({ post }) => {
   const { id, title } = post || {};
   return (
      <div className="card bg-base-100 shadow-xl">
         <div className="card-body">
            <h2 className="card-title flex-1">{title}</h2>
            <div className="card-actions justify-end mt-4">
               <Link href={`/post/${id}`}>
                  <button className="btn bg-black text-white">Read Now</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default HomeCard;
import React from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

const Profile = async () => {
   const { isAuthenticated, getUser } = getKindeServerSession();

   const isLoggedIn = await isAuthenticated();
   const user = await getUser();
   
   if (!isLoggedIn) {
      redirect("/api/auth/login?post_login_redirect_url=/profile")
   }
   return (
      <div className='text-center my-8 2xl:min-h-screen min-h-[400px]'>
         <h1 className='text-3xl font-bold'>
            {
               `Welcome to your profile page, ${user?.given_name} ${user?.family_name} !`
            }
         </h1>
         <p className='text-lg'>{ user.email}</p>
      </div>
   );
};

export default Profile;
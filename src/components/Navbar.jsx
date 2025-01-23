import { NavBar } from "./ui/tubelight-navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar = async () => {
   const { getUser } = getKindeServerSession();
   const user = await getUser();

   console.log(user);
   const navItems = [
      { name: 'Home', url: '/' },
      { name: 'Profile', url: '/profile' },
      { name: 'Login', url: '/api/auth/login' },
   ];
   const navSecure = [
      { name: 'Home', url: '/' },
      { name: 'Profile', url: '/profile' },
      { name: 'Logout', url: '/api/auth/logout' },
   ];
   return (
      <div className='min-h-[70px]'>
         <NavBar items={user? navSecure : navItems}></NavBar>
      </div>
   );
}

export default Navbar;
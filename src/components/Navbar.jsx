import { NavBar } from "./ui/tubelight-navbar";

const Navbar = () => {
   const navItems = [
      { name: 'Home', url: '/' },
      { name: 'Profile', url: '/' },
      { name: 'Login', url: '/' },
   ];
   return (
      <div className='min-h-[70px]'>
         <NavBar items={navItems}></NavBar>
      </div>
   );
}

export default Navbar;
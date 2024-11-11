import { LOGO_URL } from "../utils/Constant";
import { Link } from 'react-router-dom';
const Header=()=>{
    return(

        // old code
        // <div className="flex justify-between items-center h-150 bg-[#F9F4EE] shadow-md ">
        //    <div className="logocontainer">
          
        //   <img className=" h-20 rounded-full ml-10 " src={LOGO_URL}alt="logo"/> 
          
        //   </div>
        //   <div className="flex items-center ">
        //   <ul className="flex p-4 m-4">
          
        //     <li className="px-5 font-bold text-2xl"><Link to="/Contact">Contact Us</Link></li>
            
        //     <li className="px-5 font-bold text-2xl"><Link to="/About">About Us</Link></li>
        //     <li className="px-5 font-bold text-2xl"><Link to="/">Home</Link></li>
           
        //     </ul>
        // </div>
        // </div>

        //new one 
        <header className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black  h-20 flex justify-between items-center px-10">
  <div className="logocontainer">
    <img className="h-16 rounded-full" src={LOGO_URL} alt="logo" />
  </div>

  <nav>
    <ul className="flex space-x-8 text-2xl font-bold">
      <li><Link to="/Contact">Contact Us</Link></li>
      <li><Link to="/About">About Us</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
</header>
    )
}

export default Header;
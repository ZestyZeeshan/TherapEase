import { LOGO_URL } from "../utils/Constant";
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <div className="flex justify-between items-center h-150 bg-[#F9F4EE] shadow-md ">
           <div className="logocontainer">
          
          <img className=" h-20 rounded-full ml-10 " src={LOGO_URL}alt="logo"/> 
          
          </div>
          <div className="flex items-center ">
          <ul className="flex p-4 m-4">
          
            <li className="px-5 font-bold text-2xl"><Link to="/Contact">Contact Us</Link></li>
            
            <li className="px-5 font-bold text-2xl"><Link to="/About">About Us</Link></li>
            <li className="px-5 font-bold text-2xl"><Link to="/">Home</Link></li>
           
            </ul>
        </div>
        </div>
    )
}

export default Header;
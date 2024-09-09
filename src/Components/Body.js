import React from "react";
import { Home_Img } from "../utils/Constant";
import { Card1 } from "../utils/Constant";
import { Card2 } from "../utils/Constant";
import { Card3 } from "../utils/Constant";
import { Card4 } from "../utils/Constant";
import {Link} from 'react-router-dom'

//import Depression from "./Depression";
const Body = () =>{
    return (
        <div>
          <div className="fixed bottom-10 right-10 rounded-full"><a href="https://chatbotmentalhealth-azwzceqxqujarx4n4ataro.streamlit.app/"><img src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png" className="h-32 w-32" /></a></div>

          <div className="fixed bottom-10 left-10 rounded-full"><a href="http://10.60.88.56:8503/" className="px-5 py-3 rounded-lg bg-red-600 text-white font-semibold text-2xl">Health Status</a></div>

            <div className="my-1 bg-amber-100">
            <div className="text-center text-green-900 text-5xl ">
           <p>Your <span className="font-serif">trusted guide</span>  to</p>  
           <p>mental health <span className="i">&</span> wellness</p>

           </div>
           <div className="text-center my-5 text-lg ">
            Start improving your mental health and well-being today.TharapEase is with you.
           </div>
           <div className="m-6 p-4 flex justify-center items-center">
          <img className="rounded-3xl w-112 h-96" src={Home_Img} alt="Home_img" />
           
           </div>
           </div>
           <div>
           <div className="text-center text-xl text-orange-700 m-4 p-4">Our Mission</div>
           <div className="text-green-900 ">
           <p className="text-3xl flex justify-center">We  empower you with the knowledge and skills</p>
            <p className="text-3xl flex justify-center">you need to strengthen your mental health & </p> <p className="text-3xl flex justify-center"> well-being</p>
            </div>
           <div className="flex m-4 ">
           <div className="m-2 p-2
           shadow-xl rounded-lg">
      <img src={Card1} alt="Trust" className="rounded-lg h-56 " />
      <div className="card-content">
        <h2 className="font-bold text-green-900 my-2" >Guidance you can trust</h2>
        <p className="card-description">Find trustworthy information about mental health and wellness that you can use to make better decision</p>
      </div>
    </div>

    <div className=" m-2 p-2 shadow-xl rounded-lg
          ">
      <img src={Card2} alt="Skills" className="rounded-lg h-56 " />
      <div className="card-content">
        <h2 className="font-bold text-green-900 my-2">Skills for life success</h2>
        <p className="card-description">Build skills to manage your emotions, strengthen your relationship, and cope with difficult situations.</p>
      </div>
    </div>

    <div  className="m-2 p-2 shadow-xl rounded-lg">
      <img src={Card3} alt="Feel_Better" className="rounded-lg h-56 " />
      <div className="card-content">
        <h2 className="font-bold text-green-900 my-2">Strategies to feel better</h2>
        <p className="card-description">Learn how to improve your mental health and well-being -- and help friends and family do the same</p>
      </div>
    </div>

    <div className="m-2 p-2 shadow-xl rounded-lg
   ">
      <img src={Card4} alt="Support" className="rounded-lg h-56 " />
      <div className="card-content">
        <h2 className="font-bold text-green-900 my-2">Support you can rely on</h2>
        <p className="card-description">As a free online resource, we're here for you, day or night, whenever you need guidance, encouragement, or support.</p>
      </div>
    </div>

    </div>
           </div>

           <div className="m-1 bg-green-200">
            <p className="text-center text-4xl m-2 p-2">Find the help you need today</p>
           

            <p className="text-center text-3xl ">Pick a topic below that you'd like to explore</p>

            <div>
            <div className="mx-auto">
          <ul className="grid grid-cols-3 justify-center justify-items-start p-4 m-4">
          
            <li className="px-5 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/Anxiety">Anxiety</Link></li>
            
            <li className="px-5 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/Depression">Depression</Link></li>
            <li className="px-5 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/Stress">Stress</Link></li>
            <li className="px-5 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/Suicide">Suicide</Link></li>
            <li className="px-5 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/Ptsd">Ptsd</Link></li>
            <li className="px-5 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/BipolarDisorder">BipolarDisorder</Link></li>
            <li className="px-5 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/Sleep">Sleep</Link></li>
            <li className="px-3 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/Emotional">Emotional Intelligence</Link></li>
            <li className="px-5 py-5 rounded-2xl font-bold bg-green-600 text-white text-2xl m-1 w-72 text-center"><Link to="/Suicide">Suicide</Link></li>
           
            </ul>
        </div>
            
            </div>

            </div>
            <div className="text-center"> © 2024 TharapEase. All Rights Reserved. </div>
           
        </div>
    )
}

export default Body;
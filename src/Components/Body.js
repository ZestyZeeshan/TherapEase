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
         <div className="fixed bottom-10 right-10 rounded-full">
      <a href="https://chatbotmentalhealth-azwzceqxqujarx4n4ataro.streamlit.app/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
          alt="Chatbot"
          className="h-40 w-40 rounded-full hover:bg-green-200 hover:text-black p-2"
        />
        <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-800 text-black px-2 py-1 rounded-md">
          Chatbot
        </div>
      </a>
    </div>
          <div className="fixed bottom-10 left-10 rounded-full"><a href="http://10.60.88.56:8503/" className="px-5 py-3 rounded-lg bg-red-600 text-white font-semibold text-2xl">Health Status</a></div>
             

             {/* //sepate section */}
            {/* <div className="my-1 bg-amber-100">
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
           </div> */}

           {/* // updated code new*/}
           

           <div className="bg-gray-100 p-12 flex flex-col md:flex-row">
            
  <div className="md:w-1/2">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    <h1 className="text-5xl font-bold text-green-900 mb-8">
      Your Trusted Guide to Better Mental Health and Wellness !
    </h1>

    <p className="text-5xl font-bold text-green-900 mb-8">
      <span className="font-cursive">TherapEase</span> is here for you.
    </p>
  </div>

  <div className="md:w-1/2 flex justify-center">
    <img
      src={Home_Img}
      alt="Home Image"
      className="rounded-xl shadow-full border-2 border-gray-900 w-full h-96 md:h-full object-cover"
    />
  </div>
</div>
           {/* <div>
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
           </div> */}

           {/* improved code */}
           <div className="bg-gray-100 p-12">
  <h2 className="text-4xl font-bold text-center text-green-900 mb-8">Our Mission</h2>

  <p className="text-2xl text-center text-gray-900 mb-08">
  Empowering you with personalized support to gain the knowledge you need for a stronger, healthier mind.
</p>
<p className="text-2xl text-center text-gray-900 mb-10">
  Connect with our digital companion today.
</p>

  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
    <div className="bg-white shadow-md rounded-lg p-6">
      <img src={Card1} alt="Trust" className="rounded-lg mb-4 h-40" />
      <h3 className="text-xl font-bold text-green-700">Guidance You Can Trust</h3>
      <p className="text-gray-600">Find trustworthy information about mental health and wellness that you can use to make better decisions.</p>
    </div>

    <div className="bg-white shadow-md rounded-lg p-6">
      <img src={Card2} alt="Skills" className="rounded-lg mb-4 h-40" />
      <h3 className="text-xl font-bold text-green-700">Skills for Life Success</h3>
      <p className="text-gray-600">Build skills to manage your emotions, strengthen your relationships, and cope with difficult situations.</p>
    </div>

    <div className="bg-white shadow-md rounded-lg p-6">
      <img src={Card3} alt="Feel Better" className="rounded-lg mb-4 h-40" />
      <h3 className="text-xl font-bold text-green-700">Strategies to Feel Better</h3>
      <p className="text-gray-600">Learn how to improve your mental health and well-being—and help friends and family do the same.</p>
    </div>

    <div className="bg-white shadow-md rounded-lg p-6">
      <img src={Card4} alt="Support" className="rounded-lg mb-4 h-40" />
      <h3 className="text-xl font-bold text-green-700">Support You Can Rely On</h3>
      <p className="text-gray-600">As a free online resource, we're here for you, day or night, whenever you need guidance, encouragement, or support.</p>
    </div>
  </div>
</div>
           

           {/* previous code */}
           {/* <div className="m-1 bg-green-200">
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

            </div> */}

            {/* new code for the above */}
            <div className="bg-gray-100 p-10">
  <h2 className="text-5xl font-bold text-center text-green-900 mb-8">Find the Help You Need Today !</h2>

  <p className="text-2xl text-center text-gray-900 mb-12">
    Start your journey to better mental health. Choose a topic below to explore.
  </p>

  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
    <Link to="/Anxiety" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">Anxiety</h3>
    </Link>
    <Link to="/Depression" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">Depression</h3>
    </Link>
    <Link to="/Stress" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">Stress</h3>
    </Link>
    <Link to="/Suicide" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">Suicide</h3>
    </Link>
    <Link to="/Ptsd" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">PTSD</h3>
    </Link>
    <Link to="/BipolarDisorder" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">Bipolar Disorder</h3>
    </Link>
    <Link to="/Schizophrenia" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">Schizophrenia</h3>
    </Link>
    <Link to="/Sleep" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">Sleep</h3>
    </Link>
    <Link to="/Emotional" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg shadow-md border border-gray-700 flex justify-center items-center">
      <h3 className="text-xl">Emotional Intelligence</h3>
    </Link>
  </div>
</div>

<footer className="text-center bg-gray-100 p-4">
  © 2024 TharapEase. All Rights Reserved.
</footer>
           
        </div>
    )
}

export default Body;
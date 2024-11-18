import { Emotionall } from "../utils/Constant";

const Emotional = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-teal-200 to-yellow-200 p-6">
      <div className="max-w-6xl mx-auto shadow-lg rounded-lg bg-white">
        {/* Header Section */}
        <div className="text-center py-6">
          <h1 className="text-teal-700 font-extrabold text-4xl">MENTAL HEALTH</h1>
          <h2 className="text-purple-800 font-bold text-3xl mt-2">Emotional Intelligence</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap items-center justify-center px-8 pb-6">
          {/* Text Section */}
          <div className="flex-1 max-w-xl text-gray-700 p-6 text-justify">
            <p className="text-lg leading-relaxed mb-4">
              Emotional intelligence (also known as emotional quotient or EQ) is the ability to understand, use, and manage your own emotions in positive ways. It helps you relieve stress, communicate effectively, empathize with others, overcome challenges, and defuse conflict.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Having high emotional intelligence allows individuals to build stronger relationships, achieve personal and professional success, and lead a more fulfilling life. It involves self-awareness, self-regulation, motivation, empathy, and social skills.
            </p>
            <p className="text-lg leading-relaxed">
              You can improve your emotional intelligence by practicing mindfulness, learning to control your emotions, building empathy, and enhancing your communication skills. Emotional intelligence is key to navigating relationships and managing stress in daily life.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
            <img
              src={Emotionall}
              alt="Emotional Intelligence"
              className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emotional;




// //import React from 'react';

// import {Emotionall } from "../utils/Constant";

// //import Body from "./Body";
// const Emotional = () => {
//   return (
//     <div className=" bg-[#c9baa1]">
//       <div className="flex">
//         <div>
//         <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
//     <div className="text-green-800 font-bold m-3 p-2 text-3xl">Emotional Intelligence</div>
//     <div className="text-xl m-4">Emotional intelligence (also known as emotional quotient or EQ) is the ability to understand, use, and manage your own emotions in positive ways to relieve stress, communicate effectively, empathize with others, overcome challenges and defuse conflict.</div>
//     </div>
//     <div>
//     <div><img src={Emotionall} alt="Emotional" className= "m-12 py-4 self-center rounded-2xl"/></div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Emotional;

// {/* <div className=" bg-[#c9baa1]">
//             <div>
                
//             </div>
//             <div className="flex">

//             <div>
//             <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
//             <div className="text-green-800 font-bold m-3 p-2 text-3xl">Bipolar Disorder</div>
//             <div className="text-xl m-4">The extreme highs and lows of bipolar disorder can damage your relationships and disrupt your daily life. But you’re not powerless. With treatment, support, and good coping skills, you can manage your disorder and keep symptoms in check. </div>
//             </div>

//             <div>
//             <div><img src={Bipolar} alt="Bipolar" className= "m-12 py-4 self-center rounded-2xl"/></div>
//             </div>

//             </div>
           
            
            
//         </div> */}
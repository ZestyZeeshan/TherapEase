import { Depress } from "../utils/Constant";

const Depression = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto shadow-lg rounded-lg bg-white">
        {/* Header Section */}
        <div className="text-center py-6">
          <h1 className="text-teal-700 font-extrabold text-4xl">MENTAL HEALTH</h1>
          <h2 className="text-purple-800 font-bold text-3xl mt-2">Depression</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap items-stretch justify-center px-8 pb-6">
          {/* Text Section */}
          <div className="flex-1 max-w-lg text-gray-700 p-6 text-justify">
            <p className="text-lg leading-relaxed">
              Depression is more than just feeling sad. It affects your energy, optimism, and overall ability to function. Symptoms include persistent sadness, loss of interest in activities once enjoyed, changes in appetite, and difficulty concentrating. Depression can seem overwhelming, but with proper treatment, it is possible to regain hope and lead a fulfilling life.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Treatment options include therapy, medication, and lifestyle changes. Cognitive-behavioral therapy (CBT) can help individuals understand and change negative thought patterns, while medications like antidepressants can be prescribed to balance brain chemistry. A strong support system, self-care routines, and mindfulness practices can also be beneficial. Remember, recovery is possible, and taking the first step toward seeking help is crucial for healing.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
            <img
              src={Depress}
              alt="Depression"
              className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depression;





///previous code

// //import React from 'react';

// import { Depress } from "../utils/Constant";

// //import Body from "./Body";
// const Depression = () => {
//   return (
//     <div className=" bg-[#c9baa1]">
//       <div className="flex">
//         <div>
//         <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
//     <div className="text-green-800 font-bold m-3 p-2 text-3xl">Depression</div>
//     <div className="text-xl m-4">Depression is more than just feeling sad. It drains your optimism, energy, and drive. It can seem like there’s no way out. But no matter how bad you feel, there’s always hope. Read on to learn about symptoms, treatment, and recovery.</div>
//     </div>
//     <div>
//     <div><img src={Depress} alt="Depression" className= "m-12 py-4 self-center rounded-2xl"/></div>

//     </div>
//     </div>
//     </div>
//   );
// };

// export default Depression;
// {/* <div className=" bg-[#c9baa1]">
//             <div className="flex">
//             <div>
//             <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
//             <div className="text-green-800 font-bold m-3 p-2 text-3xl">Anxiety</div>
//             <div className="text-xl m-4">Are worries, fears, or panic attacks making it hard to function or enjoy life? Learn about the various types of anxiety disorders and their symptoms, and what you can do to take back control and regain your peace of mind. </div>
//             </div>
//             <div>
//                 <div><img src={Anxietyy} alt="Anxietyy" className= "m-12 py-4 self-center rounded-2xl"/></div>
//             </div>

//             </div>
           
            
//         </div> */}
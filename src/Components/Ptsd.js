import { ptsd } from "../utils/Constant";

const Ptsd = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 p-6">
      <div className="max-w-6xl mx-auto shadow-lg rounded-lg bg-white">
        {/* Header Section */}
        <div className="text-center py-6">
          <h1 className="text-teal-700 font-extrabold text-4xl">HEALTH & WELLNESS</h1>
          <h2 className="text-purple-800 font-bold text-3xl mt-2">PTSD & Trauma</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap items-center justify-center px-8 pb-6">
          {/* Text Section */}
          <div className="flex-1 max-w-xl text-gray-700 p-6 text-justify">
            <p className="text-lg leading-relaxed mb-4">
              When you’ve gone through something traumatic, it can seem like you’ll never feel safe again. But whether the trauma happened yesterday or years ago, you can find a way to heal, let go of painful memories, and move on.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Post-traumatic stress disorder (PTSD) is a mental health condition that’s triggered by a terrifying event, either by experiencing it or witnessing it. The symptoms can be debilitating, but treatment and therapy can help individuals process their experiences and regain control over their lives.
            </p>
            <p className="text-lg leading-relaxed">
              Healing from trauma takes time, but with the right support, you can overcome the impact of PTSD. Therapy, particularly trauma-focused cognitive behavioral therapy (TF-CBT), mindfulness practices, and building a strong support system are all part of the healing process.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
            <img
              src={ptsd}
              alt="PTSD & Trauma"
              className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ptsd;







// import { ptsd } from "../utils/Constant";

// const Ptsd = () =>{
//     return (
//         <div className=" bg-[#c9baa1]">
//             <div className="flex">
//                 <div>
//             <div className="text-green-800 font-bold  m-2 p-4">HEALTH & WELLNESS</div>
//     <div className="text-green-800 font-bold m-3 p-2 text-3xl">PTSD & Trauma
// </div>
//     <div className="text-xl m-4">When you’ve gone through something traumatic, it can seem like you’ll never feel safe again. But whether the trauma happened yesterday or years ago, you can find a way to heal, let go of painful memories, and move on.</div>
//     </div>
//     <div>
//     <div><img src={ptsd} alt="ptsd" className= "m-12 py-4 self-center rounded-2xl" /></div>
//     </div>
    

//             </div>
          
//         </div>
//     )
// }
// export default Ptsd;

// {/* <div className=" bg-[#c9baa1]">
//       <div className="flex">
//         <div>
//         <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
//     <div className="text-green-800 font-bold m-3 p-2 text-3xl">Depression</div>
//     <div className="text-xl m-4">Depression is more than just feeling sad. It drains your optimism, energy, and drive. It can seem like there’s no way out. But no matter how bad you feel, there’s always hope. Read on to learn about symptoms, treatment, and recovery.</div>
//     </div>
//     <div>
//     <div><img src={Emotionall} alt="Emotional" className= "m-12 py-4 self-center rounded-2xl"/></div>
//     </div>
//     </div>
//     </div> */}
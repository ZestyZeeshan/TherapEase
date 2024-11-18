import { sleepp } from "../utils/Constant";

const Sleep = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 via-blue-200 to-teal-200 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
                {/* Header Section */}
                <div className="text-center py-6">
                    <h1 className="text-teal-700 font-extrabold text-4xl">HEALTH & WELLNESS</h1>
                    <h2 className="text-purple-800 font-bold text-3xl mt-2">Sleep</h2>
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap justify-center items-center px-8 pb-6">
                    {/* Text Section */}
                    <div className="flex-1 max-w-xl text-gray-700 p-6 text-justify">
                        <p className="text-lg leading-relaxed mb-4">
                            Getting quality sleep is vital to your productivity, energy, and mental and physical health. Sleep problems and disorders can severely affect your well-being, but there are various treatments and strategies to help you improve your sleep quality.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Explore the different types and treatments of sleep problems, from insomnia to sleep apnea, and discover what you can do to get a better night’s sleep. Prioritize healthy sleep habits for a refreshed mind and body.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
                        <img
                            src={sleepp}
                            alt="Sleep"
                            className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sleep;










// import { sleepp } from "../utils/Constant";
// const Sleep = () =>{
//     return (
//         <div className=" bg-[#c9baa1]">
            
//             <div className="flex">
//                 <div>
//             <div className="text-green-800 font-bold  m-2 p-4">HEALTH & WELLNESS</div>
//             <div className="text-green-800 font-bold m-3 p-2 text-3xl">Sleep</div>
//             <div className="text-xl m-4">Getting quality sleep is vital to your productivity, energy, and mental and physical health. Explore the different types and treatments of sleep problems and disorders—and what you can do to get a better night’s sleep. </div>
//             </div>
//             <div>
//             <div><img src={sleepp} alt="sleep" className= "m-12 py-4 self-center rounded-2xl"/></div>  
//             </div>
         

//             </div>
            
//         </div>
//     )
// }
// export default Sleep;

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
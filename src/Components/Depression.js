//import React from 'react';

import { Depress } from "../utils/Constant";

//import Body from "./Body";
const Depression = () => {
  return (
    <div className=" bg-[#c9baa1]">
      <div className="flex">
        <div>
        <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
    <div className="text-green-800 font-bold m-3 p-2 text-3xl">Depression</div>
    <div className="text-xl m-4">Depression is more than just feeling sad. It drains your optimism, energy, and drive. It can seem like there’s no way out. But no matter how bad you feel, there’s always hope. Read on to learn about symptoms, treatment, and recovery.</div>
    </div>
    <div>
    <div><img src={Depress} alt="Depression" className= "m-12 py-4 self-center rounded-2xl"/></div>

    </div>
    </div>
    </div>
  );
};

export default Depression;
{/* <div className=" bg-[#c9baa1]">
            <div className="flex">
            <div>
            <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
            <div className="text-green-800 font-bold m-3 p-2 text-3xl">Anxiety</div>
            <div className="text-xl m-4">Are worries, fears, or panic attacks making it hard to function or enjoy life? Learn about the various types of anxiety disorders and their symptoms, and what you can do to take back control and regain your peace of mind. </div>
            </div>
            <div>
                <div><img src={Anxietyy} alt="Anxietyy" className= "m-12 py-4 self-center rounded-2xl"/></div>
            </div>

            </div>
           
            
        </div> */}
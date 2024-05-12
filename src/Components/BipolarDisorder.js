import { Bipolar } from "../utils/Constant";

const BipolarDisorder = () =>{
    return (
        <div className=" bg-[#c9baa1]">
            <div>
                
            </div>
            <div className="flex">

            <div>
            <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
            <div className="text-green-800 font-bold m-3 p-2 text-3xl">Bipolar Disorder</div>
            <div className="text-xl m-4">The extreme highs and lows of bipolar disorder can damage your relationships and disrupt your daily life. But you’re not powerless. With treatment, support, and good coping skills, you can manage your disorder and keep symptoms in check. </div>
            </div>

            <div>
            <div><img src={Bipolar} alt="Bipolar" className= "m-12 py-4 self-center rounded-2xl"/></div>
            </div>

            </div>
           
            
            
        </div>
    )
}
export default BipolarDisorder;
import { Anxietyy } from "../utils/Constant";
const Anxiety = () =>{
    return (
        <div className=" bg-[#c9baa1]">
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
           
            
        </div>
    )
}
export default Anxiety;
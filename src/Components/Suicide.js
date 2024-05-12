import { suicid } from "../utils/Constant";

const Suicide = () =>{
    return (
        <div className=" bg-[#c9baa1]">
            <div className="flex">
                <div>
            <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
    <div className="text-green-800 font-bold m-3 p-2 text-3xl">Suicide
</div>
    <div className="text-xl m-4">If you’re feeling suicidal, you may be afraid you’ll be judged or that no one will understand. If you’re worried about someone else, you may fear that you’ll say the wrong thing. But talking openly can save a life. Don’t wait: reach out.</div>
    </div>
    <div>
    <div><img src={suicid} alt="suicid" className= "m-12 py-4 self-center rounded-2xl"/></div>
    </div>
    

            </div>
           
        </div>
    )
}
export default Suicide;

{/* <div className=" bg-[#c9baa1]">
      <div className="flex">
        <div>
        <div className="text-green-800 font-bold  m-2 p-4">MENTAL HEALTH</div>
    <div className="text-green-800 font-bold m-3 p-2 text-3xl">Depression</div>
    <div className="text-xl m-4">Depression is more than just feeling sad. It drains your optimism, energy, and drive. It can seem like there’s no way out. But no matter how bad you feel, there’s always hope. Read on to learn about symptoms, treatment, and recovery.</div>
    </div>
    <div>
    <div><img src={Emotionall} alt="Emotional" className= "m-12 py-4 self-center rounded-2xl"/></div>
    </div>
    </div>
    </div> */}
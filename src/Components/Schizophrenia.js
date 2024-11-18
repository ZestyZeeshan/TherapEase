// Ensure the schizophrenia import path is correct
import { schizophrenia } from "../utils/Constant"; 

const Schizophrenia = () => {
    return (
        <div className="bg-[#c9baa1] min-h-screen p-4">
            <div className="text-center mb-6">
                <div className="text-green-800 font-bold text-xl">MENTAL HEALTH</div>
                <div className="text-green-800 font-bold text-3xl">Schizophrenia</div>
            </div>

            <div className="flex flex-wrap justify-center items-center">
                {/* Text Section */}
                <div className="max-w-md p-4 m-4">
                    <p className="text-xl text-justify leading-relaxed text-green-800">
                        Schizophrenia is a chronic mental health disorder that affects a person's thoughts, emotions, and behavior, often causing hallucinations, delusions, and cognitive difficulties. While its exact cause is unclear, it’s believed to result from a combination of genetic, environmental, and brain chemistry factors. Counseling, particularly cognitive-behavioral therapy (CBT), plays a vital role in managing schizophrenia. It helps individuals challenge distorted thinking, develop coping strategies, and improve social skills. Combined with medication and a strong support system, therapy can aid in managing symptoms and improving quality of life, enabling individuals to lead more fulfilling lives.
                    </p>
                </div>

                {/* Image Section */}
                <div className="max-w-sm">
                    <img
                        src={schizophrenia}
                        alt="Schizophrenia"
                        className="m-4 py-4 rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Schizophrenia;

import { Bipolar } from "../utils/Constant";

const BipolarDisorder = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-teal-100 to-purple-100 p-6">
            <div className="max-w-6xl mx-auto shadow-lg rounded-lg bg-white">
                {/* Header Section */}
                <div className="text-center py-6">
                    <h1 className="text-teal-700 font-extrabold text-4xl">MENTAL HEALTH</h1>
                    <h2 className="text-purple-800 font-bold text-3xl mt-2">Bipolar Disorder</h2>
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap items-stretch justify-center px-8 pb-6">
                    {/* Text Section */}
                    <div className="flex-1 max-w-lg text-gray-700 p-6 text-justify">
                        <p className="text-lg leading-relaxed">
                            Bipolar disorder involves extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). These mood swings can affect sleep, energy levels, behavior, judgment, and the ability to think clearly. The intense highs and lows can disrupt daily activities and relationships.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Although managing bipolar disorder can be challenging, it is possible with proper treatment and support. Medication, including mood stabilizers and antidepressants, is often used to manage symptoms. Therapy, particularly cognitive-behavioral therapy (CBT), helps individuals understand their emotions, triggers, and coping strategies. With treatment, it is possible to lead a fulfilling life and minimize the effects of mood swings. Seeking professional help, developing coping skills, and maintaining a support system are key to managing bipolar disorder effectively.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
                        <img
                            src={Bipolar}
                            alt="Bipolar Disorder"
                            className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BipolarDisorder;

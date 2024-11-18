import { schizophrenia } from "../utils/Constant"; // Ensure the schizophrenia import path is correct

const Schizophrenia = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 p-6">
            <div className="max-w-6xl mx-auto shadow-lg rounded-lg bg-white">
                {/* Header Section */}
                <div className="text-center py-6">
                    <h1 className="text-teal-700 font-extrabold text-4xl">MENTAL HEALTH</h1>
                    <h2 className="text-purple-800 font-bold text-3xl mt-2">Schizophrenia</h2>
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap items-center justify-center px-8 pb-6">
                    {/* Text Section */}
                    <div className="flex-1 max-w-xl text-gray-700 p-6 text-justify">
                        <p className="text-lg leading-relaxed mb-4">
                            Schizophrenia is a chronic mental health disorder that affects a person's thoughts, emotions, and behavior, often causing hallucinations, delusions, and cognitive difficulties. While its exact cause is unclear, it’s believed to result from a combination of genetic, environmental, and brain chemistry factors.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Counseling, particularly cognitive-behavioral therapy (CBT), plays a vital role in managing schizophrenia. It helps individuals challenge distorted thinking, develop coping strategies, and improve social skills. Combined with medication and a strong support system, therapy can aid in managing symptoms and improving quality of life, enabling individuals to lead more fulfilling lives.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
                        <img
                            src={schizophrenia}
                            alt="Schizophrenia"
                            className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schizophrenia;

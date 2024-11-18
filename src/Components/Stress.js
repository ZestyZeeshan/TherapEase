import { Strss } from "../utils/Constant";

const Stress = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 min-h-screen p-4">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
                {/* Header Section */}
                <div className="text-center py-6">
                    <h1 className="text-teal-700 font-extrabold text-4xl">HEALTH & WELLNESS</h1>
                    <h2 className="text-purple-800 font-bold text-3xl mt-2">Stress</h2>
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap justify-center items-center px-8 pb-6">
                    {/* Text Section */}
                    <div className="flex-1 max-w-xl text-gray-700 p-6 text-justify">
                        <p className="text-lg leading-relaxed mb-4">
                            In small doses, stress can help you stay energized and focused. However, when it becomes chronic or overwhelming, stress can have a negative impact on your health, productivity, and well-being. It is important to recognize the warning signs of stress and take proactive steps to protect yourself.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Learn how stress affects your body and mind, and explore techniques for managing it effectively. By incorporating stress-reducing practices into your daily routine, you can improve your overall health and resilience.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
                        <img
                            src={Strss}
                            alt="Stress"
                            className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stress;

import { Anxietyy } from "../utils/Constant";

const Anxiety = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
            <div className="max-w-6xl mx-auto shadow-lg rounded-lg bg-white">
                {/* Header Section */}
                <div className="text-center py-6">
                    <h1 className="text-teal-700 font-extrabold text-4xl">MENTAL HEALTH</h1>
                    <h2 className="text-purple-800 font-bold text-3xl mt-2">Anxiety</h2>
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap items-stretch justify-center px-8 pb-6">
                    {/* Text Section */}
                    <div className="flex-1 max-w-lg text-gray-700 p-6 text-justify">
                        <p className="text-lg leading-relaxed">
                            Anxiety is a natural response to stress, but when it becomes overwhelming, it can interfere with daily life. Common symptoms include excessive worry, difficulty concentrating, restlessness, and physical signs such as a racing heart or sweating.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Understanding and addressing anxiety is crucial for mental well-being. Techniques such as mindfulness, breathing exercises, and lifestyle changes like regular physical activity can help. Counseling or therapy, particularly cognitive-behavioral therapy (CBT), is effective in identifying and managing anxiety triggers. In severe cases, medical interventions, including prescribed medications, may be necessary. Seeking support and practicing self-care are key steps in regaining peace of mind and restoring balance.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
                        <img
                            src={Anxietyy}
                            alt="Anxiety"
                            className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anxiety;

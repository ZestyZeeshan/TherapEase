import { suicid } from "../utils/Constant";

const Suicide = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen p-4">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
                {/* Header Section */}
                <div className="text-center py-6">
                    <h1 className="text-teal-700 font-extrabold text-4xl">MENTAL HEALTH</h1>
                    <h2 className="text-black font-bold text-3xl mt-2">Suicide</h2>
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap justify-center items-center px-8 pb-6">
                    {/* Text Section */}
                    <div className="flex-1 max-w-xl text-gray-700 p-6 text-justify">
                        <p className="text-lg leading-relaxed mb-4">
                            If you’re feeling suicidal, you may be afraid you’ll be judged or that no one will understand. If you’re worried about someone else, you may fear that you’ll say the wrong thing. But talking openly can save a life. Don’t wait: reach out. Support is available, and it’s important to seek help before things get worse.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Reaching out to a trusted friend, family member, or professional can make a significant difference. Remember, there’s always hope, and there are resources available to guide you through tough moments.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
                        <img
                            src={suicid}
                            alt="Suicide Prevention"
                            className="object-cover rounded-2xl shadow-lg h-full max-h-[500px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suicide;

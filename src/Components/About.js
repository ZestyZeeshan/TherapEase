const About = () => {
    return (
        <div className="bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100 min-h-screen p-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-teal-600 mb-4">Trust TherapEase to Guide You Towards a Brighter Tomorrow</h1>
                    <p className="text-2xl text-gray-700">About TherapEase</p>
                </div>

                {/* Content Section */}
                <div className="space-y-8 text-lg text-gray-600">
                    {/* Mission Statement */}
                    <div>
                        <p className="font-medium text-xl text-green-800 mb-4 text-center">Welcome to TherapEase</p>
                        <p>
                            At TherapEase, we understand the complexities and challenges that accompany mental health concerns. Our mission is to provide a safe and supportive space where individuals can find solace, guidance, and professional assistance tailored to their unique needs.
                        </p>
                    </div>

                    {/* Our Commitment */}
                    <div>
                        <p className="font-medium text-xl text-green-800 mb-4 text-center">Our Commitment</p>
                        <p>
                            We are committed to breaking down barriers to mental health care. We believe that everyone deserves access to quality support and resources, regardless of their background or circumstances. Our platform is designed to be inclusive, non-judgmental, and empathetic, ensuring that every individual feels heard and understood.
                        </p>
                    </div>

                    {/* Empathetic Chatbot */}
                    <div>
                        <p className="font-medium text-xl text-green-800 mb-4 text-center">Empathetic Chatbot</p>
                        <p>
                            Our empathetic chatbot serves as a compassionate companion, offering understanding and guidance 24/7. Whether you're feeling overwhelmed, anxious, or simply in need of a listening ear, our chatbot is here to provide support and encouragement every step of the way.
                        </p>
                    </div>

                    {/* Comprehensive Resources */}
                    <div>
                        <p className="font-medium text-xl text-green-800 mb-4 text-center">Comprehensive Resources</p>
                        <p>
                            TherapEase offers a wealth of resources to support your mental health journey. From inspirational quotes and calming images to informative articles and self-help tools, our platform is your one-stop destination for holistic well-being.
                        </p>
                    </div>

                    {/* Expert Guidance */}
                    <div>
                        <p className="font-medium text-xl text-green-800 mb-4 text-center">Expert Guidance</p>
                        <p>
                            We understand that seeking professional help can be daunting, which is why TherapEase connects you with qualified therapists and counselors specialized in various areas of mental health. Whether you're struggling with relationship issues, workplace stress, depression, anxiety, or any other mental health challenge, we're here to help you find the right support tailored to your needs.
                        </p>
                    </div>

                    {/* Wellness Journey */}
                    <div>
                        <p className="font-medium text-xl text-green-800 mb-4 text-center">Your Journey to Wellness Starts Here</p>
                        <p>
                            At TherapEase, we believe that healing begins with compassion, understanding, and empowerment. We invite you to join our community and embark on a journey towards greater mental well-being. Together, we can navigate life's challenges and embrace the path to a happier, healthier you.
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-8">
                        <p className="text-lg text-gray-700 mb-4">Join us today and start your journey toward a brighter, healthier tomorrow. We're here for you!</p>
                        <button className="bg-teal-500 text-white text-xl px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300">
                            Get Started Now
                        </button>
                    </div>
                </div>

                {/* Soothing Image Section */}
                <div className="mt-8 flex justify-center">
                    <img 
                        src="https://blog.iafstore.com/static/img/posts/image/1nb8mayshseg2v4b5usj.jpg" 
                        alt="Soothing Nature" 
                        className="rounded-xl shadow-xl max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

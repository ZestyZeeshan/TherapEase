const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100 min-h-screen flex justify-center items-center p-4">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-8 text-center">
                {/* Header Section */}
                <h1 className="text-4xl font-extrabold text-teal-600 mb-4">Get in Touch with TherapEase</h1>
                <p className="text-lg text-gray-600 mb-8">
                    We're here to help. Reach out to us with any questions, concerns, or to learn more about our services.
                </p>

                {/* Contact Info Section */}
                <div className="flex justify-center gap-16">
                    {/* Phone Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-purple-600 mb-2">Phone</h2>
                        <p className="text-lg text-gray-700">987-112-3450</p>
                    </div>

                    {/* Email Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-purple-600 mb-2">Email</h2>
                        <p className="text-lg text-gray-700">tharapase@gmail.com</p>
                    </div>
                </div>

                {/* Call-to-Action Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-teal-600 mb-4">Need Assistance? We’re Here For You</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        If you or someone you know is in need of mental health support, don't hesitate to reach out. We're always available to listen and assist.
                    </p>
                    <button className="px-6 py-3 bg-teal-500 text-white font-bold text-xl rounded-lg hover:bg-teal-600 transition duration-300">
                        Contact Us Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;

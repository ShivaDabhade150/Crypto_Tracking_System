import { contactService } from "../services/contactService.js";
import { useState } from "react";
import { HomeNavBar } from "../component/HomeNavBar.jsx";
import { Footer } from "../component/Footer.jsx";
import { toast } from 'react-toastify'
export const ContactPage = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [check, setCheck] = useState(false)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };



    const handleData = async () => {
        try {
            const response = await contactService(data);
            console.log(response);
            toast.success('Submitted SuccessFully !')
            setData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            });

            setCheck(true)

        } catch (err) {
            console.log(err?.response?.data?.message);
            toast.error('error try again!')
            setData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            });

        }
    };

    return (

        <>


            {
                check ?
                    <>
                    <div  className="w-full h-screen bg-black flex flex-col ">
                        
                        <HomeNavBar />

                        <div className="w-full h-[50%] bg-black">
                            <h2 className="text-green-400 text-[40px] text-center mt-10 font-semibold bg-black">
                                Your message has been submitted successfully!
                            </h2>
                            <p className="text-gray-300 text-center mt-2 text-[30px]">
                                Our team will get back to you shortly.
                            </p>
                        </div>

                        <Footer />
                    </div>
                    </>
                    :


                    <>
                        <HomeNavBar />

                        <div className="w-full min-h-[80%] bg-black flex  justify-center  ">

                            <div className="w-full max-w-[1500px]  rounded-2xl border ">

                                {/* inner card */}
                                <div className="bg-[#000000] p-10 rounded-2xl flex flex-col gap-6">

                                    <h1 className="text-4xl font-bold text-white text-center">
                                        Contact Us
                                    </h1>

                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        value={data.firstName}
                                        onChange={handleChange}
                                        className="p-4 text-lg bg-[#1f2937] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                                    />

                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={data.lastName}
                                        onChange={handleChange}
                                        className="p-4 text-lg bg-[#1f2937] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                                    />

                                    <input
                                        placeholder="Email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="p-4 text-lg bg-[#1f2937] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                                    />

                                    <textarea
                                        rows={5}
                                        placeholder="Message"
                                        name="message"
                                        value={data.message}
                                        onChange={handleChange}
                                        className="p-4 text-lg bg-[#1f2937] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                                    />

                                    <button
                                        onClick={handleData}
                                        className="mt-2 bg-white text-black text-lg font-semibold p-4 rounded-lg hover:bg-green-400 transition-all duration-300"
                                    >
                                        Send Message
                                    </button>

                                </div>
                            </div>
                        </div>

                        <Footer />
                    </>

            }
        </>

    );
};
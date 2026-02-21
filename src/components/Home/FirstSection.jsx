import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import ShinyText from "./ShinyText";
import image from "/src/images/Kartikay.jpg"
import { HandIcon } from "../ui/hand";


export default function FirstSection() {

    return (
        <section className=" flex flex-col justify-center items-center py-10 px-4 md:px-12">

            <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8">
                {/* Text Section */}
                <div className="intro w-full lg:w-1/2 space-y-4 py-6">
                    <div className="flex relative gap-2">
                        <HandIcon />
                        <p className="text-lg sm:text-xl">Hi, I'm Kartikay Sharma</p>
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-semibold">
                        Frontend <br /> <span className="text text-[#30AF5B]">Developer</span>
                    </h1>
                    <p className="text-lg sm:text-xl max-w-xl ">
                        Shaping the future of web interactions with clean, efficient, and engaging designs{" "}
                        <ShinyText text="frontend" speed={2.8} color='#30AF5B' shineColor='#b5ff6d' /> development.
                    </p>
                    <hr className="border-[#191920] w-full" />
                    {/* Social Icons */}
                    <div className="social-links font-[Inter-Regular] flex gap-4 mt-6 font-normal uppercase">
                        <a href="https://github.com/Kartikaysharma2004" className="relative py-3 bg-transparent group">
                            GitHub
                            <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-4 h-4 -rotate-45" />
                            <span className="underline absolute top-10 left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a href="https://www.linkedin.com/in/kartikay-sharma2004/" className="relative py-3 bg-transparent group">
                            LinkedIn
                            <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-4 h-4 -rotate-45" />
                            <span className="underline absolute top-10 left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a href="mailto:kartikaysharmaa2004@gmail.com" className="relative py-3 bg-transparent group">
                            Gmail
                            <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-4 h-4 -rotate-45" />
                            <span className="underline absolute top-10 left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 flex justify-center">
                    {/* Image wrapper (relative) */}
                    <div className="relative h-[500px] w-[400px] max-md:h-96 rounded-b-full shadow-2xl">
                        <img src={image} alt="Kartikay" loading="lazy" decoding="async" className="avtar h-full w-full aspect-[3/4] rounded-b-full object-cover transition duration-300 grayscale hover:grayscale-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
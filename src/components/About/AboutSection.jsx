import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ShinyText from '../Home/ShinyText';

const Page1 = () => {

  const textRef = useRef();
  const aboutRef = useRef();
  const paraRef = useRef();


  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out" }
    );

    gsap.fromTo(paraRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out", delay: 0.5 } // Add delay to stagger animations
    );

  }, []);


  return (
    <>
      <section ref={aboutRef} className="pb-10 pt-15 flex flex-col justify-center items-center px-4 sm:px-16">
        <div className="w-[13rem] h-[13rem] top-10 right-0 absolute max-lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 300"
            className="w-full h-full -scale-x-100"
          >
            <path
              d="M65,50 L145,50 C235,50 255,120 253,150 C255,180 230,240 165,250 L65,250 Z"
              fill="currentColor"
              className="about-face"
            />
            <g className="eye">
              <circle cx="120" cy="130" r="25" className="about-eye" />
              <circle cx="185" cy="130" r="25" className="about-eye" />
              <circle cx="120" cy="130" r="8" className="about-pupil" />
              <circle cx="185" cy="130" r="8" className="about-pupil" />
            </g>
          </svg>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          {/* Text Section */}
          <div className="w-full space-y-4 text-left max-md:text-start">

            <h1 ref={textRef} className="text-4xl text-balance sm:text-7xl font-semibold py-5">
              I'm a frontend developer with passion to create <span className="text text-[#30AF5B]">Interactive designs</span>
            </h1>
            <div className='text-right'>
              <p ref={paraRef} className="text-balance sm:text-xl max-sm:text-start mb-10 max-md:ml-0 ml-40">

                I'm <ShinyText text="Kartikay Sharma" speed={2.8} color='#30AF5B' shineColor='#b5ff6d' />, a creative frontend developer dedicated to building visually appealing, user-friendly, and responsive web experiences. I focus to blend design and functionality to create seamless digital interactions.{" "}
              </p>

              <a href="/Documents/Resume.pdf" download={"Kartikay Sharma's Resume"}>
                <button className="resume-btn border-1 p-3 w-36 border-black rounded-3xl cursor-pointer hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out ">
                  My Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[13rem] h-[13rem] bottom-0 left-0 absolute max-lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" className="w-full h-full">
            <path d="M65,50 L145,50 C235,50 255,120 253,150 C255,180 230,240 165,250 L65,250 Z" fill="currentColor" className="about-face"></path>
            <g className="eye">
              <circle cx="120" cy="130" r="25" className='about-eye' />
              <circle cx="185" cy="130" r="25" className='about-eye' />
              <circle cx="120" cy="130" r="8" className="about-pupil" />
              <circle cx="185" cy="130" r="8" className="about-pupil" />
            </g>
          </svg>
        </div>
      </section>
    </>
  )
}

export default Page1
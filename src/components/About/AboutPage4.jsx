import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import ShinyText from '../Home/ShinyText';


const Education = () => {

    const textRef = useRef();
    const edtextRef = useRef();
    const achievementsRef = useRef();


    useEffect(() => {
        gsap.fromTo(textRef.current,
            { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
            {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: achievementsRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none",
                }
            }
        );

        gsap.fromTo(edtextRef.current,
            { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
            {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: achievementsRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, []);


    const education = [
        { award: "Finalist (Runner-up) – Web Design Competition", institution: "Hindu College Amritsar", year: "March 2025" },
        { award: "2nd Position in LAN Gaming (Smash Karts)", institution: "Khalsa College Amritsar", year: "March 2025" },
        { award: "Tech Fest 2023 – Products Coordinator", institution: "Khalsa College Amritsar", year: "February 2023" },
        { award: "Recognized by School Principal for Inspiring Thoughts", institution: "Govt. SSS Boys Patti", year: "April 2022" }
    ];

    return (
        <section ref={achievementsRef} className="w-full my-16 px-4 py-16">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">

                {/* Left Section (Heading) */}
                <div ref={textRef} className="md:w-1/2 pb-5">
                    <h2 className="text-lg mb-2 flex items-center gap-2 text-[#30AF5B]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg><ShinyText text="Achievements" speed={2.8} color='#30AF5B' shineColor='#b5ff6d' />
                    </h2>
                    <h3 className="text-4xl md:text-5xl mb-4 font-medium text-[var(--white)]">
                        Awards & <br />Recognition
                    </h3>
                    <p className="description pr-28 max-sm:pr-5 tracking-wide max-sm:text-sm max-sm:font-[Inter-Regular]">I have accomplished significant milestones that showcase my passion, dedication, and expertise in development and leadership.</p>
                </div>

                {/* Right Section (Education Details) */}
                <div ref={edtextRef} className="md:w-1/2 max-sm:text-sm">
                    {education.map((edu, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-400 py-4">
                            <div className="text-lg max-sm:text-sm font-medium">
                                {edu.award}
                                <span className="text-gray-400 text-sm block">{edu.institution}</span>
                            </div>
                            <div className="text-gray-400 text-right">{edu.year}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;

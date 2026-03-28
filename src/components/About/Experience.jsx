import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import ShinyText from '../Home/ShinyText';
import tsslogo from "/src/images/Logos/tss.jpg"
import kslogo from "/src/images/Logos/ks.webp"



const Experience = () => {

    const textRef = useRef();
    const edtextRef = useRef();
    const experienceRef = useRef();


    const roles = [
        {
              id: 1,
              role: "Frontend Developer",
              company: "Technical Students' Society",
              link: "https://www.linkedin.com/company/technical-students-societies/",
              logo: tsslogo,
              timeline: "December 2025 — Present"
            },
            {
              id: 2,
              role: "Freelancer",
              company: "Self Employed",
              link: "https://www.linkedin.com/in/kartikay-sharma2004/",
              logo: kslogo,
              timeline: "April 2025 — Present"
            },
    ];

    useEffect(() => {
        gsap.fromTo(textRef.current,
            { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
            {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: experienceRef.current,
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
                    trigger: experienceRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, []);


    return (
        <section ref={experienceRef} className="w-full my-16 px-4 py-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between max-sm:gap-8">

                {/* Left Section (Heading) */}
                <div ref={textRef} className="md:w-1/2">
                    <h2 className="text-lg mb-2 flex items-center gap-2 text-[#30AF5B]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg><ShinyText text="Work History" speed={2.8} color='#30AF5B' shineColor='#b5ff6d' />
                    </h2>
                    <h3 className="text-4xl md:text-5xl mb-4 font-medium text-[var(--white)]">
                        Experience
                    </h3>
                    <p className="mb-4 description pr-28 max-sm:pr-5 max-sm:tracking-wide max-sm:text-sm max-sm:font-[Inter-Regular]">I’ve partnered with student-tech communities and freelance clients to craft production-ready interfaces that feel fast, modern, and visually refined.</p>
                </div>

                {/* Right Section (Experience Details) */}
                <div ref={edtextRef} className="md:w-1/2">
                    <div className="flex flex-col gap-4 font-[Inter-Regular]">
                        {roles.map((item, index) => (
                            <div key={item.id}>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                                        <img
                                            src={item.logo}
                                            alt={item.company}
                                            className={`rounded-xl `}
                                        />
                                    </div>

                                    <div className="flex justify-between w-full max-sm:flex-col max-sm:gap-1">
                                        <div>
                                            <p className="font-medium max-sm:text-sm">{item.role}</p>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text text-[#838C96] text-sm max-sm:text-xs hover:underline underline-offset-4"
                                            >
                                                @{item.company}
                                            </a>
                                        </div>
                                        <h3 className="text-sm max-sm:text-xs max-sm:self-start text-[#838C96] whitespace-nowrap">{item.timeline}</h3>
                                    </div>
                                </div>

                                {/* Divider except last item */}
                                {index !== roles.length - 1 && (
                                    <hr className="border border-[#e2e8f0] mt-4 max-sm:mt-3" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Experience;

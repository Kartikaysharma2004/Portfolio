import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife, faPencil, faSearch, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import ShinyText from '../Home/ShinyText';

const AboutPage2 = () => {

    const textRef = useRef();
    const aboutRef = useRef();


    useEffect(() => {
        const AboutAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 50%",  // Animation triggers when the footer is 90% in view
                toggleActions: "play none none none",
            },
        });
        AboutAnimation
            .fromTo(textRef.current,
                { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
                { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out" })
    }, []);


    const processes = [
        {
            id: "01",
            icon: faSearch,
            title: "Research",
            description: "Gathering insights and understanding goals to create a strong project foundation."
        },
        {
            id: "02",
            icon: faPencil,
            title: "Wireframing",
            description: "Structuring layouts and defining elements to enhance user experience."
        },
        {
            id: "03",
            icon: faCode,
            title: "Development",
            description: "Turning wireframes into functional, responsive, and dynamic websites."
        },
        {
            id: "04",
            icon: faRocket,
            title: "Launch & Iterate",
            description: "Deploying, testing, and refining to ensure a seamless user experience."
        }
    ];

    return (
        <>
            <section ref={aboutRef} id="myprocess" class="w-full mt-16 px-4">
                <div ref={textRef} class="max-w-6xl mx-auto">
                    {" "}
                    <h2 className="text-lg mb-2 flex items-center gap-2 text-[#30AF5B]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
                        <ShinyText text="Steps I follow" speed={2.8} color='#30AF5B' shineColor='#b5ff6d' />
                    </h2>{" "}
                    <h3 class="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
                        My Development Process
                    </h3>
                    <p class="mb-4 text-lg max-sm:text-sm description pr-28 max-sm:pr-5 tracking-wide max-sm:font-[Inter-Regular]">
                        I have built projects that deliver seamless and engaging digital experiences.
                    </p>
                </div>
                <div className='flex gap-6 py-5 px-3 items-center justify-center flex-wrap max-sm:flex-nowrap max-sm:justify-start max-sm:overflow-x-auto max-sm:scroll-smooth'>
                    {processes.map((process) => (
                        <div key={process.id} className="container border border-gray-400 w-72 h-52 rounded-2xl p-5 shadow-lg hover:shadow-xl transition ease-in-out duration-300 max-sm:shrink-0">
                            <FontAwesomeIcon icon={process.icon} className='process bg-black text-white rounded-full p-3' />
                            <h1 className='font-medium text-xl max-md:text-lg mt-2'>{process.id}. {process.title}</h1>
                            <p className='mt-2'>{process.description}</p>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default AboutPage2
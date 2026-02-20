import { useRef, useEffect } from "react";
import CountUp from "./Animations/CountUp";
import gsap from "gsap";

const Preloader = ({ loading, onFinish }) => {
    const preloaderRef = useRef();

    useEffect(() => {
        if (!loading) {
            // Exit animation
            gsap.to(preloaderRef.current, {
                y: "-100%",
                duration: 1.2,
                ease: "power4.inOut",
                onComplete: onFinish, // remove component AFTER animation
            });
        }
    }, [loading, onFinish]);
    
    return (
        <div ref={preloaderRef} className="fixed inset-0 bg-black flex items-end pr-10 justify-end z-[9999]">
            <h1 className="text-8xl text-white font-semibold tracking-wider">
                <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={2.5}
                    className="count-up-text"
                    startCounting={false}
                />%
            </h1>
        </div>
    );
};

export default Preloader;
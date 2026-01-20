import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FuzzyText from "./Animations/FuzzyText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
    return (
        <div
            className="
        relative
        min-h-[100svh]
        bg-[#f7f8fa]
        flex
        items-center
        justify-center
        px-6
        overflow-hidden
      "
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center"
            >
                <FuzzyText
                    baseIntensity={0.25}
                    hoverIntensity={0.55}
                    enableHover
                    fontFamily="Inter-Regular"
                    fontSize="clamp(5rem,15vw,14rem)"
                >
                    404
                </FuzzyText>

                <div className="mt-4">
                    <FuzzyText
                        baseIntensity={0.25}
                        hoverIntensity={0.5}
                        enableHover
                        fontFamily="Inter-Regular"
                        fontSize="clamp(2rem,5vw,4rem)"
                    >
                        Page Not Found
                    </FuzzyText>
                </div>

                <p className="mt-6 text-gray-400 max-w-md">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="
            mt-10
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            border
            border-[#202025]
            rounded-full
            text-sm
            tracking-wide
            hover:bg-black
            hover:text-white
            transition-all
            duration-300
          "
                >
                    Go back home <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </motion.div>
        </div>
    );
}

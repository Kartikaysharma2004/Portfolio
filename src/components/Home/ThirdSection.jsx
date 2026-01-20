import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "/src/images/Kartikay.jpg"
import ProfileCard from "../Animations/ProfileCard "
import { Link } from "react-router-dom";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import tsslogo from "/src/images/Logos/tss.jpg"
import kslogo from "/src/images/Logos/ks.webp"
import NextjsLogo from "/src/images/Logos/next-js.webp"
import gsapLogo from "/src/images/Logos/GSAP.svg";
import reactLogo from "/src/images/Logos/React.js.svg";
import tailwindLogo from "/src/images/Logos/TailwindCSS.svg";
import ShinyText from "./ShinyText";



const AboutSection = () => {

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
      timeline: "August 2022 — Present"
    },
  ];

  const skills = [
    {
      id: 1,
      skill: "React",
      image: reactLogo
    },
    {
      id: 2,
      skill: "Nextjs",
      image: NextjsLogo
    },
    {
      id: 3,
      skill: "GSAP",
      image: gsapLogo
    },
    {
      id: 4,
      skill: "Tailwind",
      image: tailwindLogo
    },
  ]


  return (
    <section className="flex items-center justify-center px-4 py-20 max-sm:pb-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT PROFILE CARD */}
        <div className="max-lg:hidden">
          <ProfileCard
          name="Kartikay Sharma"
          title="Frontend Developer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/path/to/avatar.jpg"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
          showIcon
          showBehindGlow
          behindGlowColor="hsla(164, 100%, 70%, 0.6)"
          customInnerGradient="linear-gradient(145deg,hsla(164, 40%, 45%, 0.55) 0%,hsla(230, 60%, 70%, 0.27) 100%)"
        />
        </div>


        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* ABOUT ME */}
          <div className="about-container bg-[#eef0ff] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>

            <div className="flex items-center gap-2 text text-[#30AF5B] text-sm mb-4">
              <FontAwesomeIcon icon={faCircleCheck} />
              <ShinyText text={"Open to work"} speed={2.8} color='#30AF5B' shineColor='#b5ff6d' />
            </div>

            <p className="text-gray-600 leading-relaxed">
              Frontend Developer passionate about crafting modern, responsive
              and engaging web experiences. I focus on clean UI, smooth
              animations, and performance-driven design.
            </p>
          </div>

          {/* LATEST ROLES */}
          <div className="about-container bg-[#eef0ff] rounded-3xl p-8 max-sm:py-8 max-sm:px-4 text-black">
            <h3 className="text-xl font-semibold mb-6">Latest Roles</h3>

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


            {/* MAIN APPS */}
            <div className="mt-8">
              <h4 className="text-sm font-medium mb-4">Primary Tools</h4>

              <div className="flex flex-wrap gap-6 text-gray-600 cursor-default">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={skill.image}
                      alt={skill.skill}
                      className="w-5 h-5"
                    />
                    <span>{skill.skill}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

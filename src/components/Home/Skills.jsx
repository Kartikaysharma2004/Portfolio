export default function Skills() {

    const skills = [{
        id: 1,
        name: "HTML",
        image: "src/images/Logos/HTML.svg",
    },
    {
        id: 2,
        name: "CSS",
        image: "src/images/Logos/CSS.svg",
    },
    {
        id: 3,
        name: "JavaScript",
        image: "src/images/Logos/JavaScript.svg",
    },
    {
        id: 4,
        name: "Tailwind CSS",
        image: "src/images/Logos/TailwindCSS.svg",
    },
    {
        id: 5,
        name: "Bootstrap",
        image: "src/images/Logos/Bootstrap.png",
    },
    {
        id: 6,
        name: "React",
        image: "src/images/Logos/React.js.svg",
    },
    {
        id: 7,
        name: "Redux",
        image: "src/images/Logos/Redux.svg",
    },
    {
        id: 8,
        name: "Material UI",
        image: "src/images/Logos/material-ui-1.svg",
    },
    {
        id: 9,
        name: "Chakra UI",
        image: "src/images/Logos/chakra-ui.webp",
    },
    {
        id: 10,
        name: "Git",
        image: "src/images/Logos/GIT.svg",
    },
    {
        id: 11,
        name: "GSAP",
        image: "src/images/Logos/GSAP.svg",
    },
    {
        id: 12,
        name: "Netlify",
        image: "src/images/Logos/Netlify.png",
    },
    {
        id: 13,
        name: "Vercel",
        image: "src/images/Logos/vercel.svg",
    },
    ]

    return (

        <>
            <hr className="border-[#E2E8F0] w-full" />
            <div className="overflow-hidden w-full" >

                <div className="whitespace-nowrap py-10" id='scrolling-container'>
                    <div className="flex" id="text-container">
                        {skills.map((skill) => (
                            <div
                                key={skills.id}
                                className="skills flex items-center gap-2 px-6 py-2 mx-3 shadow-sm bg-white rounded-full"
                            >
                                <img src={skill.image} alt={skill.name} className="w-5 h-5" />
                                <span className="text-sm">{skill.name}</span>
                            </div>
                        ))}
                        {/* Duplicate for seamless infinite effect */}
                        {skills.map((skill, index) => (
                            <div
                                key={`dup-${index}`}
                                className="skills flex items-center gap-2 px-6 py-2 mx-3 bg-white rounded-full shadow-sm"
                            >
                                <img src={skill.image} alt={skill.name} className="w-5 h-5" />
                                <span className="text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <hr className="border-[#E2E8F0] w-full" /> */}

        </>

    );
}

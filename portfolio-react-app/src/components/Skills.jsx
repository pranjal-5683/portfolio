import { useEffect, useState } from "react";

const Skills = () => {
    const [skillsLogoSvg, setSkillsLogoSvg] = useState({});

    useEffect(() => {
        fetch("/svgs/skills-logo.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch SVG data");
                }
                return response.json();
            })
            .then((data) => setSkillsLogoSvg(data))
            .catch((error) => console.error("Error fetching SVG:", error));
    }, []);

    if (!Object.keys(skillsLogoSvg).length) {
        return null;
    }

    const renderSkillsSection = (category, title) => {
        if (!skillsLogoSvg[category]) return null;

        return (
            <div className="grid grid-cols-3 items-start gap-4 mb-8">
                {/* Left Side - Heading */}
                <div className="col-span-1 text-right pr-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>

                {/* Right Side - SVG List */}
                <div className="col-span-2 flex flex-wrap gap-4">
                    {Object.keys(skillsLogoSvg[category]).map(
                        (skillKey, index) => (
                            <div
                                key={index}
                                className="group relative text-center hover:cursor-pointer"
                            >
                                <img
                                    src={skillsLogoSvg[category][skillKey]}
                                    alt={skillKey}
                                    width={80}
                                    height={80}
                                    className="mx-auto"
                                />
                                <span className="absolute left-0 right-0 bottom-0 bg-black text-white text-sm opacity-0 group-hover:opacity-100 p-1 rounded">
                                    {skillKey}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    };

    return (
        <section id="skills" className="py-10 bg-gray-100">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>

                {/* Render each section */}
                {renderSkillsSection("backend", "Backend Skills")}
                {renderSkillsSection("frontend", "Frontend Skills")}
                {renderSkillsSection("database", "Database Skills")}
                {renderSkillsSection("servers", "Servers")}
                {renderSkillsSection("message_brokers", "Message Brokers")}
                {renderSkillsSection("version_control", "Version Control")}
                {renderSkillsSection("tools", "Tools")}
            </div>
        </section>
    );
};

export default Skills;

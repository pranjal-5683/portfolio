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
            <div className="mb-12 flex">
                <div className="w-1/4">
                    <h2 className="text-2xl font-bold mb-6">{title}</h2>
                </div>
                <div className="w-3/4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Object.entries(skillsLogoSvg[category]).map(
                            ([skillKey, skillPath], index) => (
                                <div key={index} className="text-center">
                                    <img
                                        src={skillPath}
                                        alt={skillKey}
                                        className="w-10 h-10 mx-auto mb-2 transform transition-transform duration-300 hover:scale-125"
                                    />
                                    <p className="text-sm font-medium">
                                        {skillKey.charAt(0).toUpperCase() +
                                            skillKey.slice(1)}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="skills" className="py-16">
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold mb-12 text-center">
                    Skills
                </h1>

                {renderSkillsSection("frontend", "Frontend Skills")}
                {renderSkillsSection("backend", "Backend Skills")}
                {renderSkillsSection("database", "Database Skills")}
                {renderSkillsSection("message_brokers", "Message Brokers")}
                {renderSkillsSection("version_control", "Version Control")}
                {renderSkillsSection("operations", "Operations")}
            </div>
        </section>
    );
};

export default Skills;

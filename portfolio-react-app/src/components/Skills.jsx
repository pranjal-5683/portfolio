import { useEffect, useState } from "react";
import { request } from "../services/axios-helper";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [skillsSvg, setSkillsSvg] = useState({});

    const fetchListOfSkills = async () => {
        try {
            const response = await request("GET", "/skills", {});
            if (response.data && response.status === 200) {
                setSkills(response.data);
            } else {
                console.error(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetch("/svgs/project-svg.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch SVG data");
                }
                return response.json();
            })
            .then((data) => setSkillsSvg(data.skills[0]))
            .catch((error) => console.error("Error fetching SVG:", error));
    }, []);

    useEffect(() => {
        fetchListOfSkills();
    }, []);

    if (!skills.length || !Object.keys(skillsSvg).length) {
        return null;
    }

    return (
        <section id="skills" className="bg-gray-100 py-10">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold mb-6">Skills</h1>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
                >
                    {skills.map((skill, index) => (
                        <article
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 border border-gray-300 hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
                        >
                            <div className="text-center">
                                <span
                                    className="mb-4 text-gray-700 hover:text-blue-700 transition-all duration-300"
                                    dangerouslySetInnerHTML={{
                                        __html: skillsSvg[index],
                                    }}
                                ></span>
                                <h4 className="text-xl font-semibold mb-3">
                                    {skill.skillName}
                                </h4>
                                <p className="text-gray-600">{skill.skills}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

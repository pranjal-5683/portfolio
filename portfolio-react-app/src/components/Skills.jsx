import { useEffect, useState } from "react";
import { request } from "../services/axios-helper";

const Skills = () => {
    const [skills, setSkills] = useState([]);

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
        fetchListOfSkills();
    }, []);

    return (
        <section id="skills">
            <h2>Skills</h2>
            
        </section>
    );
};

export default Skills;

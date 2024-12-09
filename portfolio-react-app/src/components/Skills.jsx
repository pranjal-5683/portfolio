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

  return (
    <section id="skills" className="bg-gray-80 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Skills</h1>

        {/* Backend Skills */}
        <div className="flex flex-wrap justify-center">
          {Object.keys(skillsLogoSvg.backend).map((skillKey, index) => (
            <div key={index} className="m-4">
              <img
                src={skillsLogoSvg.backend[skillKey]}
                alt={skillKey}
                width={80}
                height={80}
              />
              <p>{skillKey}</p>
            </div>
          ))}
        </div>

        {/* Frontend Skills */}
        <div className="flex flex-wrap justify-center">
          {Object.keys(skillsLogoSvg.frontend).map((skillKey, index) => (
            <div key={index} className="m-4">
              <img
                src={skillsLogoSvg.frontend[skillKey]}
                alt={skillKey}
                width={80}
                height={80}
              />
              <p>{skillKey}</p>
            </div>
          ))}
        </div>

        {/* Database Skills */}
        <div className="flex flex-wrap justify-center">
          {Object.keys(skillsLogoSvg.database).map((skillKey, index) => (
            <div key={index} className="m-4">
              <img
                src={skillsLogoSvg.database[skillKey]}
                alt={skillKey}
                width={80}
                height={80}
              />
              <p>{skillKey}</p>
            </div>
          ))}
        </div>

        {/* Servers Skills */}
        <div className="flex flex-wrap justify-center">
          {Object.keys(skillsLogoSvg.servers).map((skillKey, index) => (
            <div key={index} className="m-4">
              <img
                src={skillsLogoSvg.servers[skillKey]}
                alt={skillKey}
                width={80}
                height={80}
              />
              <p>{skillKey}</p>
            </div>
          ))}
        </div>

        {/* Brokers Skills */}
        <div className="flex flex-wrap justify-center">
          {Object.keys(skillsLogoSvg.brokers).map((skillKey, index) => (
            <div key={index} className="m-4">
              <img
                src={skillsLogoSvg.brokers[skillKey]}
                alt={skillKey}
                width={80}
                height={80}
              />
              <p>{skillKey}</p>
            </div>
          ))}
        </div>

        {/* Version Control Skills */}
        <div className="flex flex-wrap justify-center">
          {Object.keys(skillsLogoSvg["version-control"]).map((skillKey, index) => (
            <div key={index} className="m-4">
              <img
                src={skillsLogoSvg["version-control"][skillKey]}
                alt={skillKey}
                width={80}
                height={80}
              />
              <p>{skillKey}</p>
            </div>
          ))}
        </div>

        {/* Tools Skills */}
        <div className="flex flex-wrap justify-center">
          {Object.keys(skillsLogoSvg.tools).map((skillKey, index) => (
            <div key={index} className="m-4">
              <img
                src={skillsLogoSvg.tools[skillKey]}
                alt={skillKey}
                width={80}
                height={80}
              />
              <p>{skillKey}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

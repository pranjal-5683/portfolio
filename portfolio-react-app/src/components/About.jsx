import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as EducationIcon } from "./education.svg";

let timelineElements = [
    {
        id: 1,
        title: "Software Developer",
        location: "Config Server LLP, Pune, India",
        description:
            "Designed and implemented enterprise-level Java applications, including backend services for projects like the Digital Payment Platform and Crime Diary. Engaged in full-stack development, creating responsive user interfaces using HTML, CSS, and JavaScript. Developed scalable RESTful APIs and optimized communication gateways. Contributed to sprint planning using Agile methodologies and tools like JIRA.",
        date: "Feb 2024 - Present",
        icon: "work",
    },
    {
        id: 2,
        title: "Software Trainee",
        location: "Magic EdTech, Noida, India",
        description:
            "Gained hands-on experience in Java application development, mastering technologies like Core Java, Spring MVC, Spring Boot, Hibernate, and Servlets. Contributed to end-to-end project development, building proficiency in Java concepts, APIs, and software development methodologies.",
        date: "Feb 2023 - Jun 2023",
        icon: "work",
    },
    {
        id: 3,
        title: "Bachelor of Technology in Information Technology",
        location: "Ajay Kumar Garg Engineering College, Ghaziabad, India",
        description:
            "Completed coursework in Information Technology, focusing on software development, data structures, algorithms, and web technologies.",
        date: "2019 - 2023",
        icon: "education",
    },
    {
        id: 4,
        title: "Higher Secondary Certificate",
        location: "Lucknow Public School, Lucknow, India",
        description:
            "Specialized in Computer Science, building foundational knowledge in programming and IT concepts.",
        date: "2016 - 2018",
        icon: "education",
    },
    {
        id: 5,
        title: "Secondary School Certificate",
        location: "Faizabad Public School, Faizabad, India",
        description:
            "Focused on core subjects and introduced to basic computer science principles.",
        date: "2015 - 2016",
        icon: "education",
    },
];

const About = () => {
    let workIconStyles = { background: "#06D6A0" };
    let educationIconStyles = { background: "#f9c74f" };
    return (
        <div>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";
                    <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={
                            isWorkIcon ? workIconStyles : educationIconStyles
                        }
                        icon={isWorkIcon ? <span>work icon</span> : <span>education icon</span>}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                        {showButton && (
                            <a
                                className={`button ${
                                    isWorkIcon ? "workButton" : "schoolButton"
                                }`}
                                href="/"
                            >
                                {element.buttonText}
                            </a>
                        )}
                    </VerticalTimelineElement>;
                })}
            </VerticalTimeline>
        </div>
    );
};

export default About;

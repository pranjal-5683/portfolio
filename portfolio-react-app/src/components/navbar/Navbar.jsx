import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [projectSvg, setProjectSvg] = useState(null);

    useEffect(() => {
        fetch("/svgs/project-svg.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch SVG data");
                }
                return response.json();
            })
            .then((data) => setProjectSvg(data))
            .catch((error) => console.error("Error fetching SVG:", error));
    }, []);

    if (!projectSvg) {
        return null;
    }

    return (
        <header id="home" className="bg-blue-900 max-w-4xl mx-auto mt-10 px-6 py-2 rounded-full shadow-lg">
            <nav
                aria-label="Global"
                className="flex justify-between items-center"
            >
                <div className="lg:flex lg:gap-x-8">
                    {[
                        { id: "home", label: "Home", svg: projectSvg.home },
                        { id: "about", label: "About", svg: projectSvg.about },
                        {
                            id: "skills",
                            label: "Skills",
                            svg: projectSvg.navSkills,
                        },
                        {
                            id: "portfolio",
                            label: "Portfolio",
                            svg: projectSvg.portfolio,
                        },
                        {
                            id: "contact",
                            label: "Contact Me",
                            svg: projectSvg.contact,
                        },
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-sm font-semibold text-white flex items-center gap-2 transform transition-transform duration-300 hover:scale-110"
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: item.svg,
                                }}
                                aria-hidden="true"
                            ></span>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>

                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm/6 font-semibold text-white"
                    >
                        <button className="cursor-pointer flex justify-between bg-gray-100 px-4 py-2 rounded-full text-black tracking-wider hover:bg-gray-900 hover:text-white hover:scale-105 duration-500 hover:ring-1 font-mono w-[130px]">
                            <span className="ps-3">Resume</span>
                            <span
                                className="w-5 h-5 animate-bounce"
                                dangerouslySetInnerHTML={{
                                    __html: projectSvg.download,
                                }}
                                aria-hidden="true"
                            ></span>
                        </button>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

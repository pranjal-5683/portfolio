import React from "react";

const Education = () => {
    const educationData = [
        {
            institution: "Ajay Kumar Garg Engineering College",
            degree: "Bachelor Of Technology",
            specialization: "Information Technology",
            period: "2019 - 2023",
        },
        {
            institution: "Lucknow Public School",
            degree: "Higher Secondary Certificatee",
            specialization: "Computer Science",
            period: "2016 - 2018",
        },
        {
            institution: "Faizabad Public School",
            degree: "Secondary School Certificate",
            specialization: "Computer Science",
            period: "2015 - 2016",
        },
    ];

    return (
        <div className="container bg-gray-200 mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
                {/* Vertical line in the center */}
                <div
                    className="border-2 absolute border-opacity-20 border-gray-700 h-full"
                    style={{ left: "50%" }}
                ></div>

                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className={`my-12 flex justify-between items-center w-full ${
                            index % 2 === 0
                                ? "right-timeline"
                                : "left-timeline flex-row-reverse"
                        }`}
                    >
                        {/* Empty space for alignment */}
                        <div className="order-1 w-5/12"></div>

                        {/* Circle with the year (period) */}
                        <div className="z-20 flex items-center justify-center order-1 bg-gray-800 shadow-xl w-20 h-20 rounded-full">
                            <p className="mx-auto font-semibold text-md text-white text-center">
                                {item.period}
                            </p>
                        </div>

                        {/* Content box */}
                        <div
                            className={`order-1 relative ${
                                index % 2 === 0 ? "bg-gray-400" : "bg-red-400"
                            } rounded-lg shadow-xl w-5/12 px-6 py-4`}
                        >
                            <h3
                                className={`mb-3 font-bold ${
                                    index % 2 === 0
                                        ? "text-gray-800"
                                        : "text-white"
                                } text-xl`}
                            >
                                {item.degree}
                            </h3>
                            <p
                                className={`text-sm ${
                                    index % 2 === 0
                                        ? "text-gray-900"
                                        : "text-white"
                                }`}
                            >
                                {item.institution}
                            </p>
                            <p
                                className={`text-sm ${
                                    index % 2 === 0
                                        ? "text-gray-900"
                                        : "text-white"
                                }`}
                            >
                                {item.specialization}
                            </p>

                            {/* Arrow pointing to the circle */}
                            {/* <div
                                className={`absolute ${
                                    index % 2 === 0
                                        ? "left-[-24px] top-1/2 transform -translate-y-1/2"
                                        : "right-[-24px] top-1/2 transform -translate-y-1/2"
                                } bg-gray-800 w-6 h-6`}
                                style={{
                                    clipPath:
                                        index % 2 === 0
                                            ? "polygon(0 50%, 100% 0, 100% 100%)" // Right arrow
                                            : "polygon(100% 50%, 0 0, 0 100%)", // Left arrow
                                }}
                            ></div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;

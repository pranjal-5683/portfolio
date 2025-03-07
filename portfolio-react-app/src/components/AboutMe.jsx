import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-16 bg-gray-50 text-justify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
        <div className="">
          <p className="mt-4 text-lg text-gray-500">
            Hey there! I’m a Java Developer with a little over a year of experience building full-stack applications, working with APIs, and making sure everything stays secure and smooth. I’ve dabbled in Java, Spring Boot, Spring MVC, Hibernate, and J2EE to create some pretty cool apps for industries like finance, law enforcement, and banking.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Right now, I’m part of the amazing team at Config Server LLP, where I help build backend services and sprinkle some front-end magic with ReactJS, HTML/CSS, and secure storage solutions using AWS S3.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            When I’m not coding, you’ll probably find me traveling, playing cricket or football, or experimenting with new recipes in the kitchen (yes, I love to cook!).
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {/* Key Achievements Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">What I've Done</h3>
            <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
              <li>Led the Crime Diary project, simplifying police reports and data management using Java, MySQL, Keycloak, and ReactJS.</li>
              <li>Built multi-channel communication services for a Digital Payment Platform, enhancing user experience and security with Java, Spring, and Keycloak.</li>
            </ul>
          </div>

          {/* Problem Solving Approach */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">How I Tackle Problems</h3>
            <p className="mt-4 text-gray-600">
              I’m all about finding the best, most efficient way to solve a problem. Clean, simple, and maintainable code is my jam. Whether it’s tackling a tricky bug or designing a feature, I always try to find the smartest solution.
            </p>
          </div>

          {/* Professional Philosophy */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">What Gets Me Excited</h3>
            <p className="mt-4 text-gray-600">
              I thrive in fast-paced, collaborative environments. I love learning new technologies and working on cool, challenging projects. I’m eager to take on larger-scale challenges, especially in areas like AI, machine learning, and blockchain. If you're into building awesome things, let’s connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

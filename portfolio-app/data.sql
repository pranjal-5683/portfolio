CREATE DATABASE portfoliodb;

\c portfoliodb;

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_title VARCHAR(255) NOT NULL,
    project_description TEXT,
    project_link VARCHAR(255)
);

CREATE TABLE skills (
    skills_id SERIAL PRIMARY KEY,
    skill_name VARCHAR(255) NOT NULL,
    skills TEXT
);

CREATE TABLE contact_form (
    contact_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (project_title, project_description, project_link)
VALUES
    ('YouTube Clone', 'A video-sharing platform where users can upload, view, and share videos.', 'https://example.com/youtube-clone'),
    ('Quiz App', 'An interactive quiz application with multiple categories and timed questions.', 'https://example.com/quiz-app'),
    ('Product Landing Page', 'A responsive landing page designed to showcase a product''s features and benefits.', 'https://example.com/product-landing-page'),
    ('Messaging Service', 'A real-time messaging application with support for private and group chats.', 'https://example.com/messaging-service'),
    ('Twitter Clone', 'A clone of the Twitter platform that allows users to post short messages and follow others.', 'https://example.com/twitter-clone');

INSERT INTO skills (skill_name, skills)
VALUES
    ('Programming Languages & OOPs', 'C, C++, Core Java, Advanced Java'),
    ('Front-End', 'HTML, CSS, Bootstrap, JavaScript, ReactJS'),
    ('Back-End', 'Java Spring MVC, Spring Boot, Hibernate, Servlet/JSP'),
    ('Database', 'MySQL, PostgreSQL, Oracle'),
    ('Personal Skills', 'Leadership, Problem-Solving, Teamwork, Time Management, Adaptability');
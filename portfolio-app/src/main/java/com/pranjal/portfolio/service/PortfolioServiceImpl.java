package com.pranjal.portfolio.service;

import com.pranjal.portfolio.dto.ContactFormDto;
import com.pranjal.portfolio.dto.ProjectsDto;
import com.pranjal.portfolio.dto.SkillsDto;
import com.pranjal.portfolio.entity.ContactForm;
import com.pranjal.portfolio.entity.Projects;
import com.pranjal.portfolio.entity.Skills;
import com.pranjal.portfolio.mapper.EntityMapper;
import com.pranjal.portfolio.respository.ContactFormRepository;
import com.pranjal.portfolio.respository.ProjectsRepository;
import com.pranjal.portfolio.respository.SkillsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class PortfolioServiceImpl implements PortfolioService{

    @Autowired
    private EntityMapper mapper;

    @Autowired
    private EmailService emailService;

    @Autowired
    private SkillsRepository skillsRepository;

    @Autowired
    private ProjectsRepository projectsRepository;

    @Autowired
    private ContactFormRepository contactFormRepository;

    @Override
    public List<SkillsDto> getListOfSkills() {
        try{
            log.info("Fetching skills from the repository.");
            List<Skills> skillsList = skillsRepository.findAll();
            if (skillsList.isEmpty()){
                log.warn("No skills found in the repository.");
                return List.of();
            }
            return skillsList.stream()
                        .map(mapper::mapToSkillsDto)
                        .toList();
        } catch (Exception e) {
            log.error("An error occurred while retrieving skills: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to retrieve skills", e);
        }
    }

    @Override
    public List<ProjectsDto> getListOfProjects() {
        try{
            log.info("Fetching projects from the repository.");
            List<Projects> projectsList = projectsRepository.findAll();
            if (projectsList.isEmpty()){
                log.warn("No projects found in the repository.");
                return List.of();
            }
            return projectsList.stream()
                    .map(mapper::mapToProjectsDto)
                    .toList();
        } catch (Exception e) {
            log.error("An error occurred while retrieving skills: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to retrieve skills", e);
        }
    }

    @Override
    public void saveContactForm(ContactFormDto contactFormDto) {
        try {
            log.info("Saving contact form data to the database.");
            ContactForm contactForm = mapper.mapToContactForm(contactFormDto);
            contactFormRepository.save(contactForm);
            log.info("Contact form data successfully saved to the database.");
            String selfEmailSubject = "New Contact Form Submission";
            String selfEmailBody = String.format(
                    "You have received a new contact form submission:\n\n" +
                            "Name: %s\nEmail: %s\nSubject: %s\nDescription: %s\n",
                    contactFormDto.getName(),
                    contactFormDto.getEmail(),
                    contactFormDto.getSubject(),
                    contactFormDto.getDescription()
            );
            emailService.sendMail("pranjal.srivastava.tech@gmail.com", selfEmailSubject, selfEmailBody);
            String userEmailSubject = "We have received your request";
            String userEmailBody = String.format(
                    "Hello %s,\n\n" +
                            "Thank you for reaching out to us. We have received your request and will get back to you shortly.\n\n" +
                            "Here is a summary of your request:\n" +
                            "Subject: %s\nDescription: %s\n\n" +
                            "Regards,\nYour Company Team",
                    contactFormDto.getName(),
                    contactFormDto.getSubject(),
                    contactFormDto.getDescription()
            );
            emailService.sendMail(contactFormDto.getEmail(), userEmailSubject, userEmailBody);
            log.info("Email successfully sent for the contact form submission.");
        } catch (Exception e) {
            log.error("An error occurred while processing the contact form: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to process the contact form", e);
        }
    }
}

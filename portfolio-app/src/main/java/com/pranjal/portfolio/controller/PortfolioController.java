package com.pranjal.portfolio.controller;

import com.pranjal.portfolio.dto.ContactFormDto;
import com.pranjal.portfolio.dto.ProjectsDto;
import com.pranjal.portfolio.dto.SkillsDto;
import com.pranjal.portfolio.service.PortfolioService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping("/skills")
    public ResponseEntity<List<SkillsDto>> getListOfSkills() {
        log.info("Request received to retrieve list of skills.");
        try {
            List<SkillsDto> skillsDtoList = portfolioService.getListOfSkills();
            log.info("Successfully retrieved skills list");
            return ResponseEntity.ok(skillsDtoList);
        } catch (Exception e) {
            log.error("An error occurred while retrieving skills: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(List.of());
        }
    }

    @GetMapping("/projects")
    public ResponseEntity<List<ProjectsDto>> getListOfProjects() {
        log.info("Request received to retrieve list of projects.");
        try {
            List<ProjectsDto> projectsDtoList = portfolioService.getListOfProjects();
            log.info("Successfully retrieved projects list");
            return ResponseEntity.ok(projectsDtoList);
        } catch (Exception e) {
            log.error("An error occurred while retrieving projects: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(List.of());
        }
    }

    @PostMapping("/contact")
    public ResponseEntity<String> contactForm(@Valid @RequestBody ContactFormDto contactFormDto){
        log.info("Contact form submission received: {}", contactFormDto);
        try {
            portfolioService.saveContactForm(contactFormDto);
            log.info("Contact form successfully processed.");
            return ResponseEntity.ok("Thank you for reaching out. We will get back to you soon.");
        } catch (Exception e) {
            log.error("An error occurred while processing the contact form: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred. Please try again later.");
        }
    }
}

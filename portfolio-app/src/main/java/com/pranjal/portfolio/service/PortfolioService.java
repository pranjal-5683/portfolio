package com.pranjal.portfolio.service;

import com.pranjal.portfolio.dto.ContactFormDto;
import com.pranjal.portfolio.dto.ProjectsDto;
import com.pranjal.portfolio.dto.SkillsDto;
import jakarta.validation.Valid;

import java.util.List;

public interface PortfolioService {
    List<SkillsDto> getListOfSkills();
    List<ProjectsDto> getListOfProjects();
    void saveContactForm(@Valid ContactFormDto contactFormDto);
}

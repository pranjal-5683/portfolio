package com.pranjal.portfolio.mapper;

import com.pranjal.portfolio.dto.ContactFormDto;
import com.pranjal.portfolio.dto.ProjectsDto;
import com.pranjal.portfolio.dto.SkillsDto;
import com.pranjal.portfolio.entity.ContactForm;
import com.pranjal.portfolio.entity.Projects;
import com.pranjal.portfolio.entity.Skills;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EntityMapper {
    SkillsDto mapToSkillsDto(Skills skills);
    ProjectsDto mapToProjectsDto(Projects projects);
    ContactFormDto mapToContactFormDto(ContactForm contactForm);
    ContactForm mapToContactForm(ContactFormDto contactFormDto);
}

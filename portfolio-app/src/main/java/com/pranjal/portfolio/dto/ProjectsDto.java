package com.pranjal.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectsDto {
    private long projectId;
    private String projectTitle;
    private String projectDescription;
    private String projectLink;
}

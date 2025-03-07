package com.pranjal.portfolio.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "projects")
@NoArgsConstructor
@AllArgsConstructor
public class Projects {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long projectId;
    private String projectTitle;
    private String projectDescription;
    private String projectLink;
}

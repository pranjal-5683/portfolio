package com.pranjal.portfolio.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "skills")
@NoArgsConstructor
@AllArgsConstructor
public class Skills {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long skillsId;
    private String skillName;
    private String skills;
}

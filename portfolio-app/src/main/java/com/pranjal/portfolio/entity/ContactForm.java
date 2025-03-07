package com.pranjal.portfolio.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "contact_form")
@NoArgsConstructor
@AllArgsConstructor
public class ContactForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long contactId;

    private String name;
    private String email;
    private String subject;
    private String description;
}

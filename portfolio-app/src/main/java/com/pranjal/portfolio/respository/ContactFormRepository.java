package com.pranjal.portfolio.respository;

import com.pranjal.portfolio.entity.ContactForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {
}

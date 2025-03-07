package com.pranjal.portfolio.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Value("${spring.mail.username}")
    private String fromMail;

    @Autowired
    private JavaMailSender emailSender;

    @Override
    public void sendMail(String to, String subject, String htmlContent) {
        MimeMessage mimeMessage = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        try {
            helper.setFrom(fromMail);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlContent, true);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send email to " + to, e);
        }
        emailSender.send(mimeMessage);
    }
}

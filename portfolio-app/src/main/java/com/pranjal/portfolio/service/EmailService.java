package com.pranjal.portfolio.service;

public interface EmailService {

    void sendMail(String to, String subject, String htmlContent);
}

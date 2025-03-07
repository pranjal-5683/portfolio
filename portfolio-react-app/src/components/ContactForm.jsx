import React, { useState } from "react";
import { request } from "../services/axios-helper";
import Swal from "sweetalert2";

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        subject: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactForm({
            ...contactForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await request("POST", "/contact", contactForm);
            if (response.status === 200 && response.data) {
                Swal.fire({
                    title: "Thank You!",
                    text: "Your message has been successfully sent. We will get back to you shortly.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 3000,
                });
            } else {
                Swal.fire({
                    title: "Submission Failed",
                    text: "We encountered an issue while processing your message. Please try again later.",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 3000,
                });
                console.error("Unexpected response:", response.data);
            }
        } catch (error) {
            Swal.fire({
                title: "Server Error",
                text: "We are experiencing technical difficulties. Please try again later.",
                icon: "error",
                showConfirmButton: false,
                timer: 3000
            });
            console.error("Error during form submission:", error);
        }
    };   

    return (
        <div className="contactFormDIV">
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={contactForm.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            value={contactForm.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <textarea
                            rows="3"
                            placeholder="You can type here the message..."
                            name="description"
                            value={contactForm.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
    // State to hold the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State to manage submission status (e.g., for showing messages to the user)
    const [status, setStatus] = useState('');

    // Handler to update state when user types in an input field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default browser refresh
        setStatus('Sending...'); // Update status for user feedback

        try {
            // Make a POST request to your backend endpoint
            const response = await axios.post('http://localhost:5000/api/contact', {
                name: formData.name,
                email: formData.email,
                message: formData.message
            });

            // Handle success
            if (response.status === 201 || response.status === 200) {
                setStatus('Message sent successfully!');
                // Clear the form
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }
        } catch (error) {
            // Handle error
            console.error('Error sending message:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className='title'>
                <div><h1>Contact Us</h1></div>
                <div><p>Have questions about our products or want to get in touch? We'd love to hear from you!</p></div>
            </div>
            <div className='contact-container'>
                <div className='contact'>
                    {/* Use a <form> element and attach the handleSubmit function to its onSubmit event */}
                    <form className='form' onSubmit={handleSubmit}>
                        <h3>Send us a Message</h3>
                        <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                        <div className='elements'>
                            <p>Your Name *</p>
                            <input
                                type="text"
                                name="name" // The 'name' attribute must match the state property
                                placeholder="Input your full name"
                                value={formData.name} // Control the input with state
                                onChange={handleChange} // Update state on change
                                required // Basic HTML validation
                            />
                        </div>
                        <div className='elements'>
                            <p>Email *</p>
                            <input
                                type="email" // Use type="email" for better validation
                                name="email"
                                placeholder="Enter your Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                // required
                            />
                        </div>
                        <div className='elements'>
                            <p>Message *</p>
                            <textarea
                                name="message"
                                id="msg"
                                placeholder='Enter your message here...'
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className='elements sm-btn'>
                            {/* The button's default type is 'submit' inside a form */}
                            <button type="submit">Send Message</button>
                        </div>
                        {/* Display the status message to the user */}
                        {status && <p className='status-message'>{status}</p>}
                    </form>
                    <div className='contact-info'>
                        {/* You can add contact info here later */}
                    </div>
                    <div
            className="detail-tiles social-links"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, var(--color-surface), var(--color-accent))",
            }}
          >
            <a href="https://www.linkedin.com" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            {/* <a href="https://github.com/Infiniper">
              <i className="fa-brands fa-github"></i>
            </a> */}
            <a href="https://x.com" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/sanshi_india1567" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:singhkartik3108199@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
                </div>
                <div className='details'>
                    <div className='details-title'>
                        <h3>Get in Touch</h3>
                        <p>Reach out to us through any of these channels</p>
                    </div>
                    <div>
                        <div><h4>Founders</h4></div>
                        <div className='detail-tiles' style={{ 'background-image': 'linear-gradient(to bottom, white, var(--sky-blue))'}}>
                            <h4>Rameshwar Singh</h4>
                            <p>Founder & CEO</p>
                            <p style={{'font-size':'1rem'}}>7398997884</p>
                            <p>Business inquiries, partnerships, general questions</p>
                        </div>
                        <div className='detail-tiles' style={{ 'background-image': 'linear-gradient(to bottom, white, var(--sky-blue))'}}>
                            <h4>Kartikay Singh</h4>
                            <p>Co-Founder & CTO</p>
                            <p style={{'font-size':'1rem'}}>7398997884</p>
                            <p>Technical support, product questions, operations</p>
                        </div>
                        <div className='detail-tiles'>
                            <h4>Business Hours</h4>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className='detail-tiles'>
                            <h4>Email Support</h4>
                            <p>info@sanshih2o.com</p>
                            <p>We typically respond within 24 hours</p>
                        </div>
                        <div className='detail-tiles'>
                            <h4>Office Location</h4>
                            <p>Coming Soon</p>
                            <p>We're setting up our new office space</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* {faq} */}
            </div>
        </div>
    );
}

export default Contact;

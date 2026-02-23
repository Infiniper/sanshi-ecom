import React from "react";
import styles from "./footer.module.css";
// Assuming you have similar Button and Input components
// import Button1 from "../button1/button1";
// import InputBox from "../input-box/input-box";

const Footer = () => {
  // const [email, setEmail] = useState("");
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <footer className={styles.footer}>
      <div className={styles.description}>
        <img
          src="/logoHome.svg"
          alt="Sanshi H2O Logo"
          className={styles.logo}
        />
        <p>
          Discover beautiful accessories that celebrate everyday sparkle. We curate thoughtfully chosen pieces that tell a story and complement your unique style..
        </p>
      </div>

      <nav className={styles.navigation}>
        <h4>Quick Links</h4>
        <ul>
          {/* // Simplified navigation for the new site */}
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      <div className={styles.contactInfo}>
        <h4>Contact Us</h4>
        <ul>
          {/* // Updated contact details */}
          <li><p>📍 Gorakhpur, Uttar Pradesh</p></li>
          <li><p>📞 +91 7398997884</p></li>
          <li><p>📧 sanshi.main@gmail.com</p></li>
        </ul>
      </div>

      <div className={styles.socialMedia}>
        <h4>Follow Us</h4>
        <ul>
          <li><a href="mailto:singhkartik3108199@gmail.com" target="_blank" rel="noopener noreferrer">G-Mail</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/sanshi_india1567" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      
      <div className={styles.newsletter}>
        <h4>Join Our Newsletter</h4>
        <p>Get updates on new products and special offers!</p>
        <div className={styles.newsletterForm}>
          {/* You can reuse your InputBox and Button components here */}
          <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
          <button className={styles.newsletterButton}>Subscribe</button>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2025 Sanshi H2O. All Rights Reserved.</p>
        <div className={styles.legalLinks}>
          <a href="/terms">Terms & Conditions</a>
          <span>|</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// Footer.js
import React from 'react';
import './Footer.css';
import { PiFlowerTulipLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default function Footer() {
    return (
        <div id="contact">
            <div className="footer-container">
                <div className="divider-wrapper">
                    <hr className="divider" />
                    <span className="flower-icon">
                        <PiFlowerTulipLight />
                    </span>
                    <hr className="divider" />
                </div>
            </div>
            <div className="footer-info">
                <p className="contact-text">Let's Connect!</p>
                <div className="contact-icons">
                    <a href="https://github.com/xuserena12" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/xuserena12/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:serena.xu@uwaterloo.ca">
                        <IoMdMail />
                    </a>
                </div>
            </div>
        </div>
    );
}

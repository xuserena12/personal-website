import './Navbar.css';
import { Link } from 'react-router-dom';
import '../../assets/styles/styles.css';
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

    return (
        <nav className="navbar">
            <div className="menu">
                {/* Hamburger menu icon */}
                <RxHamburgerMenu
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)} // Toggle menu state
                    size={30} // Icon size
                    aria-label="Toggle menu"
                />
                <ul
                    className={`menu-items ${menuOpen ? 'menu-open' : ''}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    </li>
                    <li>
                        <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

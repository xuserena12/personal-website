import './Navbar.css';
import '../../assets/styles/styles.css';
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="menu">
                <RxHamburgerMenu
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    size={30}
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

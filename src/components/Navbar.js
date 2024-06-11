import './Navbar.css';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';
import { useState } from "react";
import menuIcon from "../assets/images/menuIcon.png";
import closeIcon from "../assets/images/closeIcon.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = "menu-items";
    const menuIsOpen = "menu-open";


    return (
        <nav className="navbar">
            <div className="menu">
                <img
                className="menu-btn"
                src={menuOpen ? closeIcon : menuIcon}
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${menuItems} ${menuOpen && menuIsOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
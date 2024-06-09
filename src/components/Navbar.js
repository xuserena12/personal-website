import './Navbar.css';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';
import { useState } from "react";
import menuIcon from "../assets/images/menuIcon.png"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="navbar">
            <div className="menu">
                <img
                className="menu-btn"
                src={menuIcon}
                alt="menu-button"
                />
                <ul className="menu-items">
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
import './Navbar.css';
import { Link } from 'react-router-dom';
import '../../assets/styles/styles.css';
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = "menu-items";
    const menuIsOpen = "menu-open";

    return (
        <nav className="navbar">
            <div className="menu">
                <img
                className="menu-btn"
                alt="menu-button"
                />
                <ul className={`${menuItems} ${menuOpen && menuIsOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
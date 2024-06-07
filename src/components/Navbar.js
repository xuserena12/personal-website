import './Navbar.css';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';

export default function Navbar() {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
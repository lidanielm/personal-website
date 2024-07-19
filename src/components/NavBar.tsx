import React from "react"
import "./NavBar.css"
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() { return (
        <nav>
            <ul className="nav-bar">
                <li><Link to={"/"} className="nav-link">About</Link></li>
                <li><Link to={"/blog"} className="nav-link">Blog</Link></li>
                <li><Link to={""} className="nav-link">Projects</Link></li>
            </ul>
        </nav>
    ) 
    }
}

export default NavBar
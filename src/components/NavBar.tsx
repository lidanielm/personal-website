import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <ul className="nav-bar">
                    <li>
                        <NavLink
                            to={'/'}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending nav-link'
                                    : isActive
                                    ? 'active nav-link'
                                    : 'nav-link'
                            }>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/blog'} className="nav-link">
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/portfolio'} className="nav-link">
                            Portfolio
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;

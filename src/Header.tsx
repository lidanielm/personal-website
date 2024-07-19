import React from 'react';
// import me from '../assets/dli2004.png';
import './Header.css';

var me = require('./assets/dli2004.png');

export default function Header() {
    return (
        <div className="wrapper intro">
            <img src={me} alt="Daniel Li" className="intro-img"/>
            <h1 className="intro-name">Hi! I'm Daniel Li.</h1>
            <p className="intro-desc">
                Student, engineer, and maker.
            </p>
        </div>
    )
}
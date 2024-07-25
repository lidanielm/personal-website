import React from 'react';
import Header from './Header';
import NavBar from './components/NavBar';
import Projects from './Projects';

export default function Portfolio() {
    return (
        <div>
            <Header />
            <NavBar />
            <div className="section">
                <h2 className="section-title">Portfolio</h2>
                <Projects />
            </div>
        </div>
    );
}
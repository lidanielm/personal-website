import React from 'react';
import './Home.css';
import Portfolio from './Projects';
import Header from './Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <NavBar />
            <div className="section">
                <h2 className="section-title">About Me</h2>
                <p className="description">
                    I'm currently a Computer Science student at the University
                    of Pennsylvania with a minor in Mathematics. With experience
                    in machine learning and full-stack web development, I'm
                    deeply interested in applying innovative technologies to
                    solving complex, real-world problems. I spend my free time
                    playing tennis, writing poetry, creating and solving
                    crossword puzzles, and playing chess.
                </p>
            </div>
            <div className="section">
                <h2 className="section-title">Work Experience</h2>
                <div className="job-experience">
                    <div className="job-header">
                        <div className="job-title">
                            <h2>Teaching Assistant — Discrete Mathematics</h2>
                            <h4>University of Pennsylvania</h4>
                        </div>
                        <div className="job-dates">Jan 2024 - Present</div>
                    </div>
                    <p className="description">
                        Successfully lead a team of TAs to create and obfuscate
                        problem sets in LaTeX, while holding weekly office hours
                        and recitation sections to help students understand
                        course material and answer questions regarding lecture
                        or problem sets.
                    </p>
                </div>
                <div className="job-experience" style={{ marginBottom: 0 }}>
                    <div className="job-header">
                        <div className="job-title">
                            <h2>Sushi Chef</h2>
                            <h4>Wasabi Sushi & Pok&#233;</h4>
                        </div>
                        <div className="job-dates">Jun 2023 - Aug 2023</div>
                    </div>
                    <p className="description">
                        Prepared over 30+ varieties of sushi and pok&#233; bowl
                        dishes, implemented a loyalty program that increased
                        repeat customer visits, developed new inventory
                        management system to reduce food waste, and improved
                        website design to simplify online ordering process.
                    </p>
                </div>
            </div>
            <div className="section">
                <h2 className="section-title">Education</h2>
                <div className="education">
                    <div className="education-header">
                        <div className="education-title">
                            <h2>Bachelor of Science in Engineering</h2>
                            <h4>University of Pennsylvania</h4>
                        </div>
                        <div className="education-dates">
                            Aug 2023 - May 2027
                        </div>
                    </div>
                    <p className="description">GPA: 4.0/4.0</p>
                    <p className="description">
                        Major in Computer Science with a minor in Mathematics,
                        concentrating in machine learning and AI. Relevant
                        coursework includes Data Structures & Algorithms,
                        Machine Learning, Computer Systems, and Big Data
                        Analytics.
                    </p>
                </div>
            </div>
            <div className="section">
                <h2 className="section-title">Portfolio</h2>
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
}

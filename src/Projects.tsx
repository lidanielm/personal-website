import React from 'react';
import ATX from './assets/ATX.png';
import './Projects.css';

var ProjectList = [
    {
        name: "ATX Markets",
        description: "ATX Markets is a recreational fictional stock trading platform. This application allows users to trade fictional stocks with fictional currency, view their portfolio, and compete with other users in real-time. It uses Svelte and Tailwind for the frontend, and Python and Supabase for the backend.",
        image: ATX,
        tags: ["Svelte", "Tailwind", "Python", "Supabase"],
        startDate: "Jan 2024",
        endDate: "Present",
        style: {
            color: "black",
            borderRadius: "10px",
        }
    },
]

function Project(project: any) {
    return (
        <div>
            <div className="project " style={project.style}>
                <div className="project-icon" style={project.style}>
                    <img src={project.image} alt="project.name" style={{width: 200}}></img>
                </div>
                <div className="project-info">
                    <h2 className="project-header">{project.name}</h2>
                    <div className="project-description">
                        {project.description}
                    </div>
                    {/* Turn this into link to atx page */}
                    {/* <div className="more-info">More info →</div> */}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div>
            {ProjectList.map((project) => Project(project))}
        </div>
    );
}
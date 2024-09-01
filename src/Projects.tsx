import React from 'react';
import ATX from './assets/ATX.png';
import REDIS from './assets/redis-logo-svgrepo-com.svg';
import './Projects.css';

const ProjectList = [
    {
        name: 'ATX Markets',
        description:
            'ATX Markets is a recreational fictional stock trading platform. This application allows users to trade fictional stocks with fictional currency, view their portfolio, and compete with other users in real-time. It uses Svelte and Tailwind for the frontend, and Python and Supabase for the backend.',
        image: ATX,
        tags: ['JavaScript', 'Python', 'Machine Learning'],
        startDate: 'Jan 2024',
        endDate: 'Present',
        classNames: ['atx'],
        style: {
            color: 'black',
            borderRadius: '10px',
        },
    },
    {
        name: 'Redis Client',
        description:
            'This Redis client is a command-line interface that allows users to interact with a Redis server. It supports basic Redis commands, uses the RESP protocol, and is written in Go.',
        image: REDIS,
        tags: ['Go'],
        startDate: 'Jun 2024',
        classNames: ['redis'],
        endDate: 'Jun 2024',
        style: {
            color: 'black',
        },
    },
    {
        name: 'Personal Website',
        description:
            "This website is a personal portfolio site built with React, containing information about me and my portfolio. I have a blog that' going to be updated soon (hopefully).",
        image: REDIS,
        tags: ['React', 'Tailwind'],
        startDate: 'Jun 2024',
        classNames: ['personal-website'],
        endDate: 'Present',
        style: {
            color: 'black',
        },
    },
    {
        name: 'PhilaSUG Website',
        description:
            'The Philadelphia SAS Users Group (PhilaSUG) website is a static site built with Hugo. It features information about the group, upcoming events, and resources for SAS users in the greater Philadelphia area. The website is built using React and Tailwind.',
        image: REDIS,
        tags: ['React', 'Tailwind'],
        startDate: 'Jun 2024',
        classNames: ['philasug'],
        endDate: 'Aug 2024',
        style: {
            color: 'black',
        },
    },
];

const tagLogos: any = {
    JavaScript: (
        <svg viewBox="0 0 600 600" width="20" height="20">
            <rect width="630" height="630" fill="#f7df1e" />
            <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
        </svg>
    ),
};

function Project(project: any) {
    // var tags = project.tags.map((tag: string) => {
    //     return (
    //         <div className="tag">
    //             {tagLogos[tag]}
    //             <p>{tag}</p>
    //         </div>
    //     );
    // });
    return (
        <div>
            <div className="project" style={project.style}>
                <div className="project-icon" style={project.style}>
                    <img
                        src={project.image}
                        alt={project.name}
                        style={{ width: 200 }}
                        className={project.classNames.join(' ')}></img>
                </div>
                <div className="project-info">
                    <h2 className="project-header">{project.name}</h2>
                    <p className="project-description">{project.description}</p>
                    {/* <div className="tag-list">
                        {tags}
                    </div> */}
                    {/* Turn this into link to atx page */}
                    {/* <div className="more-info">More info →</div> */}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return <div>{ProjectList.map((project) => Project(project))}</div>;
}

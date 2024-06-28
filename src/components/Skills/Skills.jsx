import React, { useState} from 'react';
import './skills.css';

function Skills () {
    const frontendSkills = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React.js',
        'Redux',
        'Bootstrap',
        'Tailwind CSS',
        'Sass / SCSS',
        'Responsive Web Design',
        'Version Control (Git)',
        'RESTful APIs',
        'GraphQL',
    ];

    return (
        <div className='skills-box' id='skills'>
        <div className="skills-container">
            <h2 className="skills-heading">My Skills Include:- </h2>
            <ul className="skills-list">
                {frontendSkills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )

}

export default Skills
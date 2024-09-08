import React, { useEffect, useRef } from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import SunnySideDiariesCover from '../../assets/images/sunnysidediaries.png';
import MrAxolytlCover from '../../assets/images/mraxolotyl.png';
import BlissCover from '../../assets/images/bliss.png';
import ClientDexCover from '../../assets/images/clientdex.png';

const projectsList = [
    {
        "title": "Sunny Side Diaries",
        "imageSrc": SunnySideDiariesCover,
        "technologies": ["React", "Express", "MongoDB"],
        "source": "https://github.com/xuserena12/sunny-side-diaries"
    },
    {
        "title": "Mr. Axolotyl",
        "imageSrc": MrAxolytlCover,
        "technologies": ["Flask", "JavaScript"],
        "source": "https://github.com/Celeste04/MrAxolotl"
    },
    {
        "title": "Bliss",
        "imageSrc": BlissCover,
        "technologies": ["Taipy", "Python"],
        "source": "https://github.com/prestonty/bliss"
    },
    {
        "title": "ClientDex",
        "imageSrc": ClientDexCover,
        "technologies": ["Flask", "React", "MongoDB"],
        "source": "https://github.com/syfxie/ClientDex"
    }
];

export default function Projects() {
    const projectContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRef = projectContainerRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section className="project-container" id="projects" ref={projectContainerRef}>
            <div className="projects">
                {projectsList && projectsList.length > 0 ? (
                    projectsList.map((project, id) => (
                        <ProjectCard key={id} project={project} />
                    ))
                ) : (
                    <p>No projects available</p>
                )}
            </div>
        </section>
    );
}

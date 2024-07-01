import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const projectsList = [
    {
        "title": "Sunny Side Diaries",
        "imageSrc": "temp",
        "technologies": ["React", "Express", "MongoDB"],
        "source": "https://github.com/xuserena12/sunny-side-diaries"
    },
    {
        "title": "Mr. Axolotyl",
        "imageSrc": "temp",
        "technologies": ["Flask, JavaScript"],
        "source": "https://github.com/Celeste04/MrAxolotl"
    },
    {
        "title": "Bliss",
        "imageSrc": "temp",
        "technologies": ["Taipy, Python"],
        "source": "https://github.com/prestonty/bliss"
    },
    {
        "title": "ClientDex",
        "imageSrc": "temp",
        "technologies": ["Flask", "React", "MongoDB"],
        "source": "https://github.com/syfxie/ClientDex"
    }
]

export default function Projects() {
    return (
        <section className="project-container" id="projects">
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


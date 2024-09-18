import './ProjectCard.css';

export default function ProjectCard({ project }) {
    const colors = ['tab-light-blue', 'tab-dark-blue', 'tab-purple'];

    return (
        <div className="project-wrapper">
            <div className="project-card-container">
                <a href={project.source} target="_blank" rel="noopener noreferrer" className="project-link">
                    <img src={project.imageSrc} alt={project.title} />
                </a>
            </div>
            <div className="info">
                <a href={project.source} className="title" target="_blank" rel="noopener noreferrer">
                    {project.title}
                </a>
                {project.technologies.map((tag, index) => (
                    <div key={index} className={`tab ${colors[index % colors.length]}`}>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}

import './ProjectCard.css';

export default function ProjectCard({ project }) {
    const colors = ['tab-light-blue', 'tab-dark-blue', 'tab-purple'];

    return (
        <div className="project-wrapper">
            <div className="project-card-container">
                <img src={project.imageSrc} alt={project.title} className="project-image" />
            </div>
            <div className="info">
                <p className="title">{project.title}</p>
                {project.technologies.map((tag, index) => (
                    <div key={index} className={`tab ${colors[index % colors.length]}`}>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}

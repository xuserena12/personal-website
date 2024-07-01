import './ProjectCard.css';

export default function ProjectCard({ project }) {
    return (
        <div>
            <section className="project-card-container">
                <div>
                    {project ? (
                        <>
                            <ul className="skills">
                            </ul>
                        </>
                    ) : (
                        <p>No projects available</p>
                    )}
                </div>
            </section>
            <p className="title">{project.title}</p>
        </div>
    );
};

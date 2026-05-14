import { projects } from "../../store/info";
import { myProjects } from "../../store/myProjects";
import {
    projectsSection, cardCollection, projectCard, imgWrapper,
    projectImg, cardBody, projectTitle, projectDesc,
    techStack, techBadge, cardFooter, visitLink, repoBtn, repoDisabled
} from "./styles.module.css";

function Projects() {
    const handleImgClick = (imgSrc) => {
        window.open(imgSrc, '_blank');
    };

    return (
        <section id={projects.split("#")[1]} className={projectsSection}>
            <div className="container">
                <div className="text-center p-4 mb-4">
                    <h2 className="sections-title">
                        <i className="fa-solid fa-laptop-code me-2" />
                        My <span>Projects</span>
                    </h2>
                </div>

                <div className={cardCollection}>
                    {myProjects.map((project, index) => (
                        <div key={index} className={projectCard}>
                            {/* Image Wrapper */}
                            <div className={imgWrapper} onClick={() => handleImgClick(project.image)}>
                                <img src={project.image} className={projectImg} alt={project.title} />
                            </div>

                            <div className={cardBody}>
                                <h5 className={projectTitle}>{project.title}</h5>
                                <p className={projectDesc}>{project.description}</p>

                                {/* Technologies Badges */}
                                <div className={techStack}>
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className={techBadge}>{tech}</span>
                                    ))}
                                </div>

                                <div className={cardFooter}>
                                    {/* Repo Link */}
                                    {project.isRepoAvailable ? (
                                        <a href={project.repoLink} target="_blank" rel="noreferrer" className={repoBtn}>
                                            <i className="fa-brands fa-github me-1"></i> Repo
                                        </a>
                                    ) : (
                                        <span className={repoDisabled}>Repo is private</span>
                                    )}

                                    {/* Live Link */}
                                    {project.liveLink.includes("Not_Deployed_Yet") ? (
                                        <span className={repoDisabled} title="This project is under development">
                                            <i className="fa-solid fa-hourglass-start me-1"></i> Coming Soon
                                        </span>
                                    ) : (
                                        <a href={project.liveLink} target="_blank" rel="noreferrer" className={visitLink}>
                                            Visit Website <i className="fa-solid fa-arrow-up-right-from-square ms-1" style={{ fontSize: '12px' }}></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
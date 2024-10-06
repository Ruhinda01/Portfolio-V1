import { useState } from 'react';
import { PROJECTS } from "../constants";
import ProjectDrawer from "./ProjectDrawer";
import '../styles/Projects.css';

const Projects = () => {
    // This is used to keep track of which project is currently expanded. Set to null meaning no project is expanded at the start
    const [expandedProjectId, setExpandedProjectId] = useState(null);
    // This function is called when a project is clicked, it compares the project's id with the currently expanded project's id
    // If they are the same, it will collapse the project
    // if they are not the same, it will expand the project and collapse the currently expanded project
    const handleProjectExpand = (projectId) => {
        setExpandedProjectId(projectId === expandedProjectId ? null : projectId);
    }
    return (
        <section className="projects">
            <div className="projects_content">
                <h2 className="projects_title">SELECTED PROJECTS</h2>
                <div className="horizontal_line"></div>
                {PROJECTS.map(project => (
                    <ProjectDrawer
                        key={project.id}
                        project={project}
                        isExpanded={project.id === expandedProjectId}
                        onExpand={handleProjectExpand} />
                ))}
            </div>
        </section>
    )
};

export default Projects

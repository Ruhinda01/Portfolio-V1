import { useRef, useState, useEffect } from 'react';
import '../styles/ProjectDrawer.css';
import '../styles/Projects.css';

const ProjectDrawer = ({ project, isExpanded, onExpand }) => {
    const [isHovered, setIsHovered] = useState(false);
    // const [isExpanded, setIsExpanded] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const checkboxRef = useRef(null);
    const projectCardRef = useRef(null);
    const marqueeRef = useRef(null);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleMouseMove = (e) => {
        if(projectCardRef.current) {
            const rect = projectCardRef.current.getBoundingClientRect();
            setTooltipPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    // When the card (box) is clicked, this checks the checkbox. If the checkbox is checked, the card will expand.
    // If the checkbox is not checked, the card will collapse.
    // It tells the rest of the website that a checkbox has been changed, so it can update anything that need to know about the change
    const handleCardClick = (e) => {
        e.preventDefault();
        onExpand(project.id);
        // if (checkboxRef.current) {
        //     checkboxRef.current.checked = !checkboxRef.current.checked;
        //     const event = new Event('change', { bubbles: true });
        //     checkboxRef.current.dispatchEvent(event);
        // }
    };

    
    // useEffect(() => {
    //     // Whenever the checkbox is changed (i.e. checked or unchecked), this callback function is called.
    //     // The function takes the current state of the checkbox (checked or not) and updates the isExpanded state variable.
    //     // That way, the component knows if it should be expanded or not.
    //     const checkbox = checkboxRef.current;
    //     const handleExpandChange = () => setIsExpanded(checkbox.checked);
        
    //     // Add the event listener to the checkbox so that when the checkbox is changed, the callback is called.
    //     checkbox.addEventListener('change', handleExpandChange);
        
    //     // When the component is unmounted, remove the event listener so that the callback isn't called when the checkbox is changed
    //     // after the component is gone.
    //     return () => {
    //         checkbox.removeEventListener('change', handleExpandChange);
    //     };
    // }, []);

    // when the component mounts/when the projects.images array changes, it clones the entire marquee content and appends it to the parent container
    // It creates the illusion of infinite loop by duplicating the content. 
    useEffect(() => {
        const marquee = marqueeRef.current;
        if (marquee && project.images.length > 0) {
            const clone = marquee.innerHTML;
            marquee.innerHTML += clone;
        }
    }, [project.images]);

    return (
        <>
            <div
                ref={projectCardRef}
                className='project-card'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={handleCardClick}
            >
                <input type="checkbox" id={`expand-${project.id}`} className='expand-checkbox' ref={checkboxRef} />
                <label htmlFor={`expand-${project.id}`} className='project-label'>
                    <div className='project-header'>
                        <span className="project-number">{project.projectNumber}</span>
                        <span className='project-title'>{project.title}</span>
                        {project.link && (
                            <a
                                target="_blank"
                                href={project.link}
                                className="live-link"
                                rel='noreferrer'
                                onClick={(e) => e.stopPropagation()}
                            >
                                Live
                            </a>
                        )}
                    </div>
                    {/* Project Content */}
                    <div className={`project-content ${isExpanded ? 'expanded' : ''}`}>
                        {project.images.length > 0 && (
                            // This is used to clip the overflow of the marquee.
                            <div className='image-marquee-container'>
                                <div className='image-marquee' ref={marqueeRef}>
                                    {project.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            className='project-image'
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className='project-details'>
                            <div className='project-about'>
                                <span>About</span>
                                <p>{project.about}</p>
                            </div>
                            <div className='technologies'>
                                <span>Technologies</span>
                                <ul>
                                    {project.technologies.map((technology, index) => (
                                        <li key={index}>{technology}</li>
                                    ))}
                                </ul>
                            </div>
                            {project.github && (
                                <div className='github-link-container'>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className='github-link'
                                        onClick={(e) => e.stopPropagation()}>
                                        <span>Github</span>
                                    </a>
                                </div>
                            )}
                        </div>
                        
                    </div>
                </label>
                {isHovered && (
                    <div
                        className='tooltip'
                        style={{
                            top: `${tooltipPosition.y + 20}px`,
                            left: `${tooltipPosition.x + 20}px`,
                            // transform: 'translate(-50%, -100%)'
                        }}>
                        {isExpanded ? 'Collapse' : 'Expand'}
                    </div>
                )}
            </div>
            <div className="horizontal_line"></div>
        </>
    )

}

export default ProjectDrawer

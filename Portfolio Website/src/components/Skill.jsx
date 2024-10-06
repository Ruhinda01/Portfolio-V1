import { SKILLS } from "../constants";

const Skill = () => {
    return (
        <div className="skill-container">
            <h2 className="skill-title">SKILLS</h2>
            <ul className="skill-list">
                {SKILLS.map(skill => (
                    <li className="skill-item" key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>   
    )
}

export default Skill;

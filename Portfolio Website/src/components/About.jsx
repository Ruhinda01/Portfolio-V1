import { ABOUT_CONTENT } from '../constants';
import Skill from './Skill';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-skill">
            <div className='full-about'>
                <div className="about-content">
                    <h2 className='about-title'>ABOUT</h2>
                    {Object.entries(ABOUT_CONTENT).map(([key, value]) => (
                        <p className="about-paragraph" key={key}>{value}</p>
                    ))}
                </div>
                <Skill />
            </div>
        </section>
    )
}

export default About;

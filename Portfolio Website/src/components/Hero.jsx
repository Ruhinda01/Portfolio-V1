import { HERO_CONTENT } from "../constants";
import { HERO_TEXT } from "../constants";
import '../styles/Hero.css';


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_content">
                <h1 className="hero_title">
                    {Object.entries(HERO_CONTENT).map(([key, value]) => (
                        <span className={key} key={key}>{value}</span>
                    ))}
                </h1>
                <div className="hero_text_container">
                    <p className="hero_text">{HERO_TEXT}</p>
                </div>
            </div>
        </section>
    );
};

export default Hero

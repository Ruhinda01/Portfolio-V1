import { CONTACT } from "../constants";
import { LINKS } from "../constants";
import Links from "./Links";
import '../styles/Contact.css';


const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <h2 className="contact-title">GET IN TOUCH</h2>
                    <p className="contact-text">{CONTACT}</p>
                    <div className="contact-links">
                        <Links links={LINKS} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;

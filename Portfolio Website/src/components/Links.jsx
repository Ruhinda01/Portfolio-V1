import arrowIcon from "../assets/arrow-right.svg";
import '../styles/Links.css';


const Links = ({ links }) => {
    return (
        <ul className="links-list">
            {Object.entries(links).map(([key, value]) => (
                <li className="links-item" key={key}>
                    <img src={arrowIcon} alt="arrow icon" className="arrow-icon"/>
                    {key === 'EMAIL' ? (
                        <span className="email-link">({value.replace('mailto:', '')})</span>
                    ) : (
                        <a href={value} target="_blank" rel="noopener noreferrer" className="social-link">
                            ({key})
                        </a>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default Links;

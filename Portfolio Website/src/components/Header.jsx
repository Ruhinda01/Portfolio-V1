import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    // getting formatted time to EAT
    const getFormattedTime = () => {
        const options = {
            timeZone: 'Africa/Nairobi',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        return new Date().toLocaleTimeString('en-US', options);
    }
    // Time state
    const [time, setTime] = useState(getFormattedTime());
    // Blink state for the semicolon that will flash every second
    const [blink, setBlink] = useState(false);
    useEffect(() => {
        const timeInterval = setInterval(() => {
            // Setting time
            setTime(getFormattedTime());
            // Blink semicolon every second
            setBlink(prevBlink => !prevBlink);
        }, 1000);
        return () => clearInterval(timeInterval);
    }, []);
    // Splitting time into hour and minute
    // Using array destructuring to get hour and minute from time
    // New concept learnt. can also be done with objects
    const [hour, minute] = time.split(':');
    // I need the header to contain the navbar
    // The navbar will have my name, a digital clock and a contact button
    // My current location and digital clock will be in the left side and the contact button will be in the right side
    // My name will be in the middle of the header
    return (
        <header className="header">
            <nav className='navbar'>
                <div className="nav_left">
                    <span className="city">KAMPALA,</span>
                    <span className="country">UG</span>
                    <div className='time'>
                        <span className='hour'>{hour}</span>
                        <span className='colon' style={{ visibility: blink ? 'hidden' : 'visible' }}>:</span>
                        <span className='minute'>{minute}</span>
                        <span className='timezone'>EAT</span>
                    </div>
                </div>
                <div className='nav_middle'>
                    <span className='name'>
                        Ruhinda
                        <br></br>
                        Roderick
                    </span>
                </div>
                <div className='nav_right'>
                    <button className='contact' onClick={() => alert("Contact me!")}>
                        <span className='contact_text'>CONTACT</span>
                    </button>
                </div>
            </nav>
        </header>
    )
};

export default Header

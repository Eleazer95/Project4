import React from 'react';
import Title from '../Title';
import BOUNCE from 'react-reveal/Bounce';

export default function Testimonials() {
    return (
        <div className="purpose-of-website-creation">
            <div className="inside-container">
                <Title title="purpose of website creation" color="#989c9f"/>
                <div className="testimonial-center">
                    <div className="testimonial-texts">
                        <BOUNCE duration={2000}><p>This website was created to render Software and Hardware services with the former being the most important to the total satisfaction of customers and also offering tutorship for young innovative minds in Africa in order to hone and direct their talent in the technological world.</p></BOUNCE>
                        
                    </div>
                    <div className="testimonial-icon">
                        <BOUNCE duration={2000}><i className="fas fa-quote-right"></i></BOUNCE>
                    </div>
                </div>
            </div>
        </div>
    )
}

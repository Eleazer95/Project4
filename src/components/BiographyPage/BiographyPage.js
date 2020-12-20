import React from 'react';
import Title from '../Title';
import BackPerson from '../../images/man3.jpg';
import Bounce from 'react-reveal/Bounce';
import './biographyPage.css';
import RubberBand from 'react-reveal/RubberBand';


export default function BiographyPage() {
    return (
        <section className="biography">
            <div className="inside-container">
                <h4>Computer Software and HardWare Scientist</h4>
                <h1>Eleazer Ayuk</h1>
                <div className="biography-links">
                    <li>
                        
                        <a href="#">
                            <p className="p1">HOMEPAGE</p>
                            <p>BIOGRAPHY</p>
                        </a>
                    </li>

                    <li>

                        <a href="/">
                            <p className="p1">PORTFOLIO</p>
                            <p>MY TECHS</p>
                        </a>

                    </li>

                    <li>

                        <a href="/">
                            <p className="p1">HOMEPAGE</p>
                            <p>BE IN TOUCH</p>
                        </a>

                    </li>

                    <li>

                        <a href="/blog">
                            <p><i className="fas fa-search"></i></p>
                        </a>

                    </li>
                </div>
                <div className="person">
                    <div className="personImg">
                        <Bounce top duration={3000}><img src={BackPerson} alt="img" /></Bounce>
                        
                    </div>
                    <div className="person-texts">
                        <Title title="Eleazer Ayuk" color="#fff"/>
                        <Bounce right duration={3000} cascade>
                            <p className="textp">Eleazer Ayuk is a young Computer Hadware and Software Scientist who's main goal is the total technological empowerment and advancement of youths and also giving them the neccessary technological innovation they need both in Nigeria and in Africa at large.</p>
                        </Bounce>
                        

                    </div>
                </div>
            </div>
        </section>
    )
}
import React from 'react';
import Title from '../Title';
import BOUNCE from 'react-reveal/Bounce'

export default function WhoIs() {
    return (
        <div className="whoIs">
            <div className="inside-container">
                <Title title="who is Eleazer Ayuk" color="#e8f4dc"/>

                <div className="whoIs-center">
                    <div className="texts">
                        <BOUNCE duration={2000}><p>Eleazer Ayuk is a Software and HardWare Computer Scientist</p>
                            <p>Having a Degree in Mathematics.</p>
                            <p>And an online certificate in Machine Learning.</p>
                            <p>Eleazer aspires to promote Tech Innovation from Africa.</p>
                            </BOUNCE>
                    </div>
                    <div className="text-icons">    
                        <div className="media-icons">
                            <BOUNCE left duration={8000}><a href="https://www.twitter.com/AyukEleazer"><i className="fab fa-twitter"></i></a></BOUNCE>
                            <BOUNCE left duration={7000}><a href="https://www.facebook.com/eleazer.akhiwuayuk"><i className="fab fa-facebook-f"></i></a></BOUNCE>
                            <BOUNCE left duration={6000}><a href="https://www.instagram.com/teezaakhiwuayuk/saved/?hl=en"><i className="fab fa-instagram"></i></a></BOUNCE>
                            <BOUNCE left duration={5000}><a href="https://www.pinterest.com/femmanalis/"><i className="fab fa-pinterest"></i></a></BOUNCE>
                            <BOUNCE left duration={4000}><a href="#"><i className="fab fa-google-plus-g"></i></a></BOUNCE>
                            <BOUNCE left duration={3000}><a href="#"><i className="fab fa-whatsapp"></i></a></BOUNCE>
                            <BOUNCE left duration={2000}><a href="https://m.youtube.com/channel/UCRHHaAchxZSdWB-ECGJ9jjw"><i className="fab fa-youtube"></i></a></BOUNCE>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import Title from '../Title';
import RubberBand from 'react-reveal/RubberBand';
import ReactPlayer from 'react-player';
import Web from '../../images/web development.png';
import Game from '../../images/game development.jpg';
import Machine from '../../images/machine learning.jpg';
import Robot from '../../images/robots.png';

export default function JustDefault() {
    return (
        <div className="just-default">
            <div className="inside-container">
                <Title title="description of services" color="#f1f1f6"/>
                <div className="just-default-center">
                    <div className="just-texts">
                        <RubberBand duration={3000}> <p><b>Specializing</b> mostly in web design and development, we also offer tutorship in <b>html&css</b>, <b>JavaScript</b>, <b>PHP</b>, <b>Node.js</b>, <b>JQuery</b>, <b>Reactjs</b>, <b>Angularjs</b>, <b>MongoDB</b>, <b>Express</b> and <b>Database</b>. Teaching you how to use the <b>MEAN</b> and <b>MERN</b> stack for frontend and backend web development.</p>
                        <img className="Web" src={Web}/>
                            <p><b>We</b> make use of powerful game design tools like <b>Unity</b> and <b>Love2d</b> setting the framework with efficient programming languages like <b>C++</b>, <b>C#</b> and <b>Lua</b> to give an efficient understanding of game design and architecture.</p>
                            <img className="Game" src={Game}/>
                            <p><b>Using</b> <b>python</b>, <b>Jupyter Note-book</b>, and <b>Visual Studio Code</b>, we are able to teach you how you can collect data, train the data using a machine learning algorithm such as linear regression and get a model that is closely related to your test data</p>
                            <img className="Machine" src={Machine}/>
                            <p><b>With</b> the use of <b>ROS (Robots Operating System)</b>, we are able to take a more indept approach on finding out the functional and responsive atrributes of robots. Using the application of Trigonometry, Electrical Engineering and mechanical Engineering, our team are able to teach you the requirements needed to become a Robotics Engineer.</p>
                            <img className="Robot" src={Robot}/>
                            </RubberBand>
                       
                    </div>
                    <div className="just-video">
                        <ReactPlayer className="ReactPlayer" url="https://youtu.be/UAfqE7ctcgs" width='100%'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

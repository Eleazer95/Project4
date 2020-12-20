import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context/Context';
import logo from '../../src/logos/logo.png';
import Bounce from 'react-reveal/Bounce';

export default function Footer() {
    return (
        <ProductConsumer>
            {value=>{
                return(
                        <footer>
                            <Bounce bottom duration={3000} cascade>
                            <ul>

                                {
                                    value.links.map(links => {
                                        return (
                                            <li key={links.id}><Link to={links.path}>{links.link}</Link></li>
                                        )
                                    })
                                }
                                {/* <li><Link to="/">HOME</Link></li>
                            <li><Link to="/blog">BLOG</Link></li>
                            <li><Link to="/biography">BIOGRAPHY</Link></li>
                            <li><Link to="/interiors">INTERIORS</Link></li>
                            <li><Link to="/events">EVENTS</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/inspirations">INSPIRATIONS</Link></li>*/}
                                <li><Link>Copyright &copy; 2020 <img src={logo} width="20px" height="20px" alt="" />  EA Technologies. Allrights Reserved</Link></li>
                            </ul>
                            </Bounce>
                        </footer>
                    
                )
            }}
        </ProductConsumer>
    )
}
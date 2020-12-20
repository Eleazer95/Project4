import React from 'react';

import './HomePage.css';
import Header from './Header';
import Services from './Services';
import PortFolio from './PortFolio';
import JustDefault from './JustDefault';
import Twitter from './Twitter';
import WhoIs from './WhoIs';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

export default function HomePage(){
    return(
        <div>
            <Header/>
            <Services/>
            <PortFolio/>
            <JustDefault/>
            <Twitter/>
            <WhoIs/>
            <Testimonials/>
            <ContactForm/>
        </div>
    )
}
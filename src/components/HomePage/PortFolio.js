import React from 'react';
import Title from '../Title';
import {ProductConsumer} from '../Context/Context';
import Wobble from 'react-reveal/Wobble'
 
export default function PortFolio() {
    return (
        <ProductConsumer>
            {value=>{
                const {portfolio}=value;
                return(
            <section className="portfolio">
                <div className="inside-container">
                    <Title title="portfolio" color="#323232"/>
            <div className="portfolio-center">
                {portfolio.map(portfolio=>{
                    return(
                        <Wobble duration={3000}> <div className="single-portfolio" key={portfolio.id} style={{ backgroundImage: `url(${portfolio.img})` }}>
                            <div className="plus">
                                <i className={portfolio.plus}></i>
                            </div>
                        </div>
                        </Wobble>
                       
                    )
                })}
            </div>
                </div>
            </section>
                )
            }}
        </ProductConsumer>
    )
}
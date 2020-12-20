import React from 'react';
import Title from '../Title';
import {ProductConsumer, ProductProvider} from '../Context/Context';
import RubberBand from 'react-reveal/RubberBand';
import Jello from 'react-reveal/Jello';


export default function Popular() {
    return (
        <ProductConsumer>
            {value=>{
                return(
                    <section className="blog">
                        <div className="inside-container">
                            <Title title="blogs about tech" color="grey"/>
                            <div className="blog-center">
                                {value.blogItems.map(item=>{
                                    return(
                                        <div className="single-blog" key={item.id}>
                                            <RubberBand left duration={4000}><img src={item.img} alt="" /></RubberBand>
                                            
                                            <div className="posts">
                                                <Jello left duration={4000}><p>{item.date}</p>
                                                    <p>{item.title}</p>
                                                    <p>{item.words}</p>
                                                    <p>{item.words2}</p>
                                                    <p>{item.words3}</p>
                                                    <p>{item.words4}</p>
                                                    <p>{item.words5}</p>
                                    </Jello>
                                            </div>
                                            <div className="comments">
                                            </div>
                                        </div>
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

import React from 'react';
import logo from '../logos/logo.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context/Context';

export default function Navbar() {
    return (
        <ProductConsumer>
            {value=>{
                const{sidebarOpen,handleSidebar,handleClose,links,scrollEffect,headerShow}=value;
                return(
                    <NavWrapper show={sidebarOpen} posit={headerShow}>
                        <div className="header-container">
                            <nav>
                                <div className="logoBtn">
                                    <Link to='/'
                                    onClick={handleClose}
                                    
                                    ><img src={logo} height="100px" width="100px" alt="" /></Link>
                                    <div className="tech">
                                        <h1>Technologies</h1>
                                    </div>
                                    <div className="btn" onClick={handleSidebar}>
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                    </div>
                                </div>

                                <ul className="links" onClick={handleClose}>

                                    {/* importing dynamically with map from data */}
                                    {value.links.map(links=>{
                                            return(
                                            <li key={links.id}><Link to={links.path}>{links.link}</Link></li>
                                            )
                                        })}
                                
                                </ul>
                            </nav>
                        </div>
                    </NavWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.div`
position:sticky;
top:0;
z-index:6;

background:${props=>props.posit ?'skyblue':'skyblue'};
transition:${props => props.posit ? 'all 0.5s ease-in-out' :'all 0s ease-in-out'};
opacity:${props => props.posit ? '1' : '0.8'};

.logoBtn img{
    display:block;
    padding:0px;
    width:100px;
    height:50px;

}

.tech{
    position:absolute;
    bottom:15px;
    left:110px;
}

.header-container{
    width:100%;
    z-index:5;
}

.bar{
    width:35px;
    margin:5px;
    padding:2px;
    background:white;
}

.logoBtn{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:3px solid grey;
    padding:5px;
}
.links{
    transition:all 0.5s ease-in-out;
    position:fixed;
    top:71px;
    bottom:0px;
    left:0px;
    right:0px;
    background:skyblue;
    width:400px;
    transform:${props => props.show ? 'translate(0%)' :'translate(-100%)'};
}

.links li a{
    color:white;
    display:block;
    text-transform:uppercase;
    padding:10px;
    transition:all 0.5s ease-in-out;
    border:1px solid transparent;
    border-bottom:1px solid transparent; 
}

.links li a:hover{
    color:crimson;
    display:block;
    padding:10px 25px;
    border-bottom:2px solid skyblue; 
    background:rgb(255,255,255);
}

/* responsive mode */
@media screen and (min-width:870px){
    .links{
        transition:all 0s ease-in-out !important;
    }
}

@media screen and (min-width:870px){
    .header-container{
        margin:auto;
        width:100%;
    }

    .btn{
        display:none;
    }

    nav{
        display:flex;
        justify-content:space-between;
        padding:10px 0;
        max-width:1180px;
        margin:0 auto;
        position:relative;
    }

    .links{
        transition:all 0s ease-in-out !important;
        display:flex;
        margin-right:10px;
        justify-content:space-between;
        allign-items:center;
        position:relative;
        top:auto;
        background:transparent;
        width:auto;
        transform:translate(0);
    }

    .links li a{
        margin:0 2px;

    }

    .links li a:hover{
        margin:0 2px;
        padding:10px;
        border:1px solid white;
    }

    .logoBtn{
        border-bottom:0;
    }
}

@media screen and (min-width:960px){
    .logoBtn img{
        display:block;
        padding:0 0px;
    }
}
















`

import React, {useState} from 'react';
import Title from '../Title';
import ROLL from 'react-reveal/Roll';
import BOUNCE from 'react-reveal/Bounce';
import {db} from '../firebase';


export default function ContactForm() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(()=>{
            alert('Message has been submitted successfully. 👍')
        })
        .catch(error=>{
            alert(error.message);
        });

        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <section className="contact-form">
            <div className="inside-container">
                <Title title="contact" color="#e8f4dc"/>
                <div className="contact-form-center">
                    <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs-texts">
                        <div className="inputs">
                             <ROLL><div className="form-texts">
                                <p>fill in the form below, giving your fullname, email and you could write us a message and we would get in touch with you as soon as possible.</p><br />
                            </div></ROLL>
                                <p><label htmlFor="name"><ROLL>FULLNAME</ROLL></label></p>
                                <BOUNCE duration={2000}><input placeholder="fullname" type="text" className="name" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} /></BOUNCE>

                                <p><label htmlFor="email"><ROLL>EMAIL</ROLL></label></p>
                                <BOUNCE duration={2000}><input placeholder="email" type="email" className="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/></BOUNCE>
                        </div>
                    </div>
                    <div className="form-area">
                        <p><label htmlFor="message">MESSAGE</label></p>
                        <textarea placeholder="message" name="" id="" cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    </div>
                        <button type="submit" className="btnForm">SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
    )
}


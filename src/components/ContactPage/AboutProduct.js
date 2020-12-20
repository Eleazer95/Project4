import React, {useState} from 'react';
import Title from '../Title';
import {db} from '../firebase';


const  AboutProduct = () => {
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
        <div className="aboutContact">
            <div className="inside-container">
                <Title title="contact us" color="grey"/>
                <div className="aboutContact-center">

                    <div className="aboutContact-info">
                        <p><span><i className="fas fa-user"></i></span>
                    Eleazer Ayuk
                    </p>

                        <p><span><i className="fas fa-phone-alt"></i></span>
                    +234 809 742-2779 or +234 805 478-3627
                    </p>

                        <p><span><i className="fas fa-envelope"></i></span>
                    femmanali95@gmail.com
                    </p>
                    </div>
                    
                    <div className="aboutContact-form">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="inputs">
                                <label htmlFor="name">name</label><br />
                                <input placeholder="name" type="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>

                            <div className="inputs">
                                <label htmlFor="name">email </label><br />
                                <input placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="textarea">
                                <label htmlFor="message">message</label>
                                <textarea placeholder="message" name="" id="" cols="30" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>

                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default AboutProduct

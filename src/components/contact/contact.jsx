import React from "react";
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i8ude3r', 'template_693q5po', form.current, 'aLju0V7HPng8zar_F')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>lydia9017@gmail.com</h5>
                        <a href="mailto:lydia9017@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsMessenger className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Tingwei</h5>
                        <a href="https://m.me/profile.php?id=100005092110068" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <IoLogoWhatsapp className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+1234567</h5>
                        <a href="https://api.whatsapp.com/send?phone+886983612109" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder=" Your Full Name" required/>
                    <input type="email" name="email" placeholder=" Your Email" required/>
                    <textarea name="message"  rows="7" placeholder=" Your Message" required></textarea>
                    <button type="submit" className="btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact
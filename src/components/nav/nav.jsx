import React from "react";
import './nav.css';
import {AiOutlineHome} from "react-icons/ai";
import {BiUser} from "react-icons/bi";
import {BsFillHddNetworkFill} from "react-icons/bs";
import {RiServiceLine} from "react-icons/ri";
import {MdContactPhone} from "react-icons/md";
import {useState} from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return(
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillHddNetworkFill/></a>
            <a href="#testimonails" onClick={() => setActiveNav('#testimonails')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone/></a>
        </nav>
    )
}
export default Nav
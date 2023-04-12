import React from "react";
import './footer.css';
import {AiFillFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
    return(
        <footer>
            <a href="#" className='footer_logo'>TINGWEI</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonails'>Testimonails</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.facebook.com/profile.php?id=100005092110068"><AiFillFacebook/></a>
                <a href="https://instagram.com"><BsInstagram/></a>
                <a href="https://twitter.com"><AiOutlineTwitter/></a>
            </div>

        </footer>
    )
}
export default Footer
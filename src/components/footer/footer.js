import React from "react";
import './footer.css';
import {FaGitSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';

function Footer() {
    return (

        <footer>
            <p>Create by: Douglas Wellington Martins</p>


            <div className="my-social-networks">
                <a href="https://github.com/dwmartins"><FaGitSquare className="git"/></a>
                <a href="https://www.linkedin.com/in/douglas-martins-a36a45185/"><FaLinkedin className="linkedin"/></a>
                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=+5514991882505"><FaWhatsappSquare className="whatsapp"/></a>
            </div>
        </footer>
    )
}

export default Footer;
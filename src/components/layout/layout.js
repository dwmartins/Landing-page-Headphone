import React from 'react';
import './layout.css';
import Fundo from '../img/layout.png';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';

function Layout() {
    return (

        <section id='layout'>

            <div className='text'>
                <h1>
                    HEADSET NEW SOUND
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu vestibulum nunc, eget placerat sapien. Quisque ac mauris eget velit imperdiet cursus id vel mauris. 
                </p>

                <a href='#'>Read more</a>

                <p className='value'>$125,99</p>

                <div className='buy-now'>
                    <a href='#'>BUY NOW</a>
                </div>
            </div>

            <div className='img-layout'>
                <img src={Fundo}/>

                <div className='social-networks'>
                    <FaFacebookF className='facebook'/>
                    <BsTwitter className='twitter'/>
                    <AiFillInstagram className='instagram'/>
                </div>
            </div>

        </section>

    )
}

export default Layout;
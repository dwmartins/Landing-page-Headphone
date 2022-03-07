import React,{useState} from 'react'
import './header.css'
import {BiHeadphone} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

function Header() {
  const [state, setState] = useState(false);

  const toggle=() =>{
    setState(!state);
  }

  return (
    <header>

      <nav>
        <div className='logo'>  
          <BiHeadphone className='icon-headphone'/>
        </div>

        <div 
        className='menu-hamburguer'
        onClick={toggle}>
          <GiHamburgerMenu/>
        </div>

        <div className={'menu ' +(state ? 'activemenu': '')}>
          <div className='nav-list'>
            <ul>
              <li><a href='#'>HOME</a></li>
              <li><a href='#'>HEADPHONE</a></li>
              <li><a href='#'>ABOUT</a></li>
              <li><a href='#'>CONTACT</a></li>
            </ul>
          </div>

          <div className='buy'>
            <AiOutlineSearch className='search'/>
            <FaShoppingCart className='cart'/>
          </div>
        </div>


      </nav>

    </header>
  );
}

export default Header;

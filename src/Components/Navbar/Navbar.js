import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';


export default function Navbar() {
  return (
    <nav className='container'>
        <img src={logo} alt='' className='logo'></img>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimony</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>

    </nav>
  )
}

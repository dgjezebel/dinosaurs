import React, { useState } from 'react';
import logo from '../Images/ablogoheader-02.png';
//import ReactDOM from 'react-dom';
import './header.css';
import {Link} from 'react-router-dom';
import './droppedMenu.css';
import DroppedMenu from './DroppedMenu';

export default function Header(){
        return(
            <div className='header'>
                <Link to=''><img className='image' src={logo} /></Link>
                <div className='navigation' >
                    <ul >
                        <li><Link className='linkbutton' to='/menu'>Our Menu</Link></li>
                        <li><Link className='linkbutton' to='/about'>About</Link></li>
                        <li><Link className='linkbutton' to='/contact'>Contact</Link></li>
                    </ul>
                    <div className='hamburger'>
                        <DroppedMenu/>
                    </div>
                <div className='image'></div>
                </div>
        </div>
    )
}
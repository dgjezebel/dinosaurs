import React from 'react';
import ablogo from '../Images/ablogo.svg'
import '../css/siteholder.css'
import { Link } from 'react-router-dom';
import facebook from '../Images/facebook.png'
import insta from '../Images/insta.png'
import messenger from '../Images/messenger.png'

export default function SiteHolder(){
    return(
        <div className="contentDiv">
            <div className='content'>
                <img className='siteholderimg' src={ablogo} alt='ab catering logo'></img>
                
                <div className='center'>
                    <h1>
                        We Deliver!
                    </h1>
                    
                    <h2>
                        Now serving Philadelphia and the Tri-State area!
                        </h2>
                    <h2>
                        <a href="tel:215-792-2197" className='telnumber'>Phone number: <u>(215)792-2197</u></a>
                        <br/>
                        Email: customerservice@ab-catering.com
                    </h2>
                    
                </div>
            </div>
            <div className='buttoncenter'>
                <Link to='/menu'className='menuButton'>Check out our Menu!!!</Link>
            </div>
            <h2>Find us on Facebook and Instagram</h2>
            <div className='medialinks'>
                <a href='https://facebook.com/abcatering028072' target="_blank" rel="noopener noreferrer"><img src={facebook} alt='facebook link'/></a>
                <a href='https://instagram.com/abcatering028072' target="_blank" rel="noopener noreferrer"><img src={insta} alt='instagram link'/></a>
            </div>

        </div>
    )
}

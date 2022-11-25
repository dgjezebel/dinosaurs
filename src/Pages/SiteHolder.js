import React from 'react';
import ablogo from '../Images/ablogo.svg'
import '../css/siteholder.css'
import { Link } from 'react-router-dom';
import facebook from '../Images/fbook.png'
import insta from '../Images/instagram.png'
import phone from '../Images/phone.png'

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
                        Serving Philadelphia and New Jersey!
                        </h2>
                    <h2>
                    Email: <a href="mailto:customerservice@ab-catering.com">customerservice@ab-catering.com</a>
                         
                    </h2>
                    <h2>
                        Phone number: <a href="tel:215-792-2197" >(215) 792-2197</a>
                        <br/>
                    </h2>
                    
                </div>
            </div>
            <div className='buttoncenter'>
                <Link to='/menu'className='menuButton'>Check out our Menu!!!</Link>
            </div>
            <div className='medialinks'>
                <a href='https://facebook.com/abcatering028072' target="_blank" rel="noopener noreferrer"><img src={facebook} alt='facebook link'/></a>
                <a href='https://instagram.com/abcatering028072' target="_blank" rel="noopener noreferrer"><img src={insta} alt='instagram link'/></a>
                <a href="tel:215-792-2197" target="_blank" rel="noopener noreferrer"><img src={phone} alt='instagram link'/></a>
            </div>

        </div>
    )
}

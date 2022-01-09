import React from 'react';
import ablogo from '../Images/ablogo.png'
import '../css/siteholder.css'

export default function SiteHolder(){
    return(
        <div className='content'>
            <img className='siteholderimg' src={ablogo} alt='ab catering logo'></img>
            
            <div className='center'>
                <h1>
                    We Deliver!
                </h1>
                <h2>
                    Now serving Philadelphia and the Tri-State area
                    </h2>
                <h2>
                    Phone number: (215) 792-2197
                    <br/>
                    Email: customerservice@ab-catering.com
                </h2>
            </div>
        </div>
    )
}

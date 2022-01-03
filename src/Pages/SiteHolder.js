import React from 'react';
import ablogo from '../Images/ablogo.png'
import '../css/siteholder.css'

export default function SiteHolder(){
    return(
        <div className='content'>
            <img className='siteholderimg' src={ablogo} alt='ab catering logo'></img>
            
            <div className='center'>
                <h2>
                    Now serving Philadelphia and the Tri-State area
                    </h2>
                <h2>
                    Phone number: (267)351-0962
                    <br/>
                    <a href="mailto:jax.bishop.webdev@gmail.com?subject=We%20are%20interested!!">Contact</a>
                    Email: abcatering@gmail.com
                </h2>
            </div>
        </div>
    )
}

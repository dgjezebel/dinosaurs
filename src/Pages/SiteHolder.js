import React from 'react';
import ablogo from '../Images/ablogo.jpg'
import ReactDOM from 'react-dom';
import './siteholder.css'

export default function SiteHolder(){
    return(
        <div className='content'>
            <img className='siteholderimg' src={ablogo} alt='ab catering logo'></img>
            
            <div className='center'>
                <h2>Coming soon to a dining room near you</h2>
            </div>
        </div>
    )
}

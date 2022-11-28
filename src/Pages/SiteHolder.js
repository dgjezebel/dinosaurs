import React from 'react';
import ablogo from '../Images/ablogo.png'
import '../css/siteholder.css'
import { Link } from 'react-router-dom';
import facebook from '../Images/fbook.png'
import insta from '../Images/instagram.png'

export default function SiteHolder(){
    return(
        <div className="contentDiv">
            <div className='content'>
                <img className='siteholderimg' src={ablogo} alt='ab catering logo'></img>
                <div className='center'> 
                    <h2>
                        Serving Philadelphia and New Jersey!
                        </h2>
             
                    <h2 className='textalign'>
                    Our mission is to bring you the best homestyle cooking right to your table. We use only the freshest ingredients, and we add a little bit of love to everything we bake.{' '} 
                    <Link to='/Contact'>Contact us</Link> and we'll be happy to host your next event!
                    </h2>
                    
                </div>
            </div>
            <div className='buttoncenter'>
                <Link to='/Menu'className='menuButton'>Check out our Menu!</Link>
            </div>
            <div className='medialinks'>
                <a href='https://facebook.com/abcatering028072' target="_blank" rel="noopener noreferrer"><img src={facebook} alt='facebook link'/></a>
                <a href='https://instagram.com/abcatering028072' target="_blank" rel="noopener noreferrer"><img src={insta} alt='instagram link'/></a>
            </div>

        </div>
    )
}

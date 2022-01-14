import React from 'react';
import '../css/specials.css'
import image from '../Images/valentinesDay.jpg'

export default class Specials extends React.Component {
    render(){
        return(
        <div>
            <div>
                <h2>Valentine's Day Specials</h2>
            </div>
            <div className='specialsdiv'>
                <img className='specialsImg'src={image} alt='valentines day specials'/>
            </div>
        </div>
        )

    }
}
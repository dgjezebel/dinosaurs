import React from 'react';
import '../css/specials.css'
import image from '../Images/vdaymenu.jpg'
import image2 from '../Images/vdaymenu2.jpg'

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
            <div className='specialsdiv'>
                <img className='specialsImg'src={image2} alt='valentines day specials'/>
            </div>
        </div>
        )

    }
}
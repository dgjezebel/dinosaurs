import React from 'react';
import '../css/specials.css'

export default class Specials extends React.Component {
    render(){
        return(
        <div>
            <div>
                <h2>Valentine's Day Specials</h2>
            </div>
            <div className='specialsdiv'>
                        <p>Chocolate Covered Strawberries</p>
                        <p>6 for $25 - 12 for $40</p>
                    <br/>
                        <p>Red Velvet Cake</p>
            </div>
        </div>
        )

    }
}
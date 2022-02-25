import React from 'react';
import '../css/specials.css'
import image from '../Images/pd.jpg'

export default class Specials extends React.Component {
    render(){
        return(
        <div className='specialsDiv'>
            <div className='specialsdiv'>
                <img className='specialsImg'src={image} alt='valentines day specials'/>
            </div>
            <div className='specialsdiv'>
            <h2>$6.00 Specials</h2>
                <p>Meatball Parmesan on Roll</p>
                <p>Sausage with Peppers and Onions on roll</p>
                <p>Cheeseburger</p>
                <p>Chicken on Roll wiht House Dressing</p>
                <br/>
                <h2>$7.00 Specials</h2>
                <p>Spagetti with Red Sauce</p>
                <p>Raviolli</p>
                <p>Pizza Steak</p>
                <p>Cheesesteak</p>
                <p>Meatloaf with 1 Side</p>
                <br/>
                <h2>Other Specials</h2>
                <p>Homemade Lasagna $8.00</p>
                <p>Chicken or Beef Empanadas (3) $10.00</p>
                <p>Chicken Cordon Bleu with 2 sides $12.00</p>
                <br/>
                <p>Add French Fries or Onion Rings +$2.00</p>
                <p>Add Meatballs or Sausage +$2.00</p>

                <h2>Sides</h2>
                <p>French Fries | Asparagus | Baked Potato | Broccoli | Onion Rings | Corn | Mixed Vegetables | Mashed Potato</p>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
        )

    }
}
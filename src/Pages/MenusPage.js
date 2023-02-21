import React from 'react';
import { Link } from 'react-router-dom';
import '../css/menuspage.css';
import foodtruck from '../Images/foodcart.jpg'
import catering from '../Images/catering.jpg'
export default class MenusPage extends React.Component {
    render(){
        return(
            <div className='menuDiv'>
                    <div ><Link to='/summerfoodtruck'><img alt='food truck menu' className='menuimage'src={foodtruck}/></Link></div>
                    <div ><Link to='/menu'><img alt='catering menu' className='menuimage'src={catering}/></Link></div>
            </div>
        )

    }
}
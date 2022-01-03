import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom';
import '../css/header.css';
import '../css/hamburger.css';
import Hamburger from './Hamburger';
import logo from '../Images/ablogoheader-02.png';

export default function Header(){
        return(
            <div className='header'>
                <Link to=''><img className='image' src={logo} alt='ab catering' /></Link>
                <div className='navigation' >
                    <ul >
                        <li><Link className='linkbutton' to='/menu'>Our Menu</Link></li>
                        <li><Link className='linkbutton' to='/about'>About</Link></li>
                        <li><Link className='linkbutton' to='/contact'>Contact</Link></li>
                    </ul>
                    <div className='hamburger'>
                        <Hamburger/>
                    </div>
                <div className='image'></div>
                </div>
        </div>
    )
}
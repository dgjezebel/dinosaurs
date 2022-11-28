import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom';
import '../css/header.css';
import '../css/hamburger.css';
import HamburgerOpen from './HamburgerOpen';
import Hamburger from './Hamburger';
import logo from '../Images/ablogoheader-02.png';
import { Component } from 'react';

export default class Header extends Component{
    state={
        isOpen:false,
        display:'none',
        isDesktop: false
    }

open = () => {
    this.setState({
        display:this.state.isOpen ? 'inline': 'none'
    })
}
closeMenu = () =>{
    this.setState({
        display:'none',
        isOpen:false,
        
    })
}
popupmenu = () =>{
    this.setState({ 
        isOpen:!this.state.isOpen,  
    }, () => this.open())
    this.updatePredicate = this.updatePredicate.bind(this);}
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth < 700 });
  }

render(){
    const isDesktop = this.state.isDesktop;
    const isOpen = this.state.isOpen;
        return(
            <div>
            {isDesktop ? (
                <div className='header'>
                <Link to=''><img className='image'  src={logo} alt='ab catering' /></Link>
                <div className='navigation'  >
                    <ul style={{display:this.state.display}}>
                        <li><Link className='linkbutton' to='/menu'  onClick={this.closeMenu}>Our Menu</Link></li>
                        <li><Link className='linkbutton' to='/gallery' onClick={this.closeMenu}>Gallery</Link></li>
                        <li><Link className='linkbutton' to='/specials' onClick={this.closeMenu}>Specials</Link></li>
                        <li><Link className='linkbutton' to='/about' onClick={this.closeMenu}>About</Link></li>
                        <li><Link className='linkbutton' to='/contact' onClick={this.closeMenu}>Contact</Link></li>
                    </ul>
                    <div className='hamburger' onClick={this.popupmenu}>
                        {isOpen ? (<HamburgerOpen/>) : (<Hamburger />)}
                    </div>
                </div>
            </div>
            ) : (
            <div className='header'>
            <Link to=''><img className='image'  src={logo} alt='ab catering' /></Link>
            <div className='navigation'  >
                <ul>
                    <li ><Link className='linkbutton' to='/menu' >Our Menu</Link></li>
                    <li><Link className='linkbutton' to='/gallery' onClick={this.closeMenu}>Gallery</Link></li>
                    <li><Link className='linkbutton' to='/specials' onClick={this.closeMenu}>Specials</Link></li>
                    <li><Link className='linkbutton' to='/about'>About</Link></li>
                    <li><Link className='linkbutton' to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
        )}
        </div>
    )
}}
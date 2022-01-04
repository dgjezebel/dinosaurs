import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom';
import '../css/header.css';
import '../css/hamburger.css';
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

popupmenu = () =>{
    console.log('clicked')
  
    this.setState({ 
        isOpen:!this.state.isOpen,
//        display:this.state.isOpen ? 'inline': 'none'  
    }, () => this.open())
    console.log(this.state)
    this.updatePredicate = this.updatePredicate.bind(this);}
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth < 600 });
  }

render(){
    const isDesktop = this.state.isDesktop;
    console.log(this.state)
        return(
            <div>
            {isDesktop ? (
                <div className='header'>
                <Link to=''><img className='image'  src={logo} alt='ab catering' /></Link>
                <div className='navigation'  >
                    <ul style={{display:this.state.display}}>
                        <li><Link className='linkbutton' to='/menu'>Our Menu</Link></li>
                        <li><Link className='linkbutton' to='/about'>About</Link></li>
                        <li><Link className='linkbutton' to='/contact'>Contact</Link></li>
                    </ul>
                    <div className='hamburger' onClick={this.popupmenu}>
                        <Hamburger/>
                    </div>
                <div className='image'></div>
                </div>
            </div>
            ) : (
            <div className='header'>
            <Link to=''><img className='image'  src={logo} alt='ab catering' /></Link>
            <div className='navigation'  >
                <ul style={{display:''}}>
                    <li><Link className='linkbutton' to='/menu'>Our Menu</Link></li>
                    <li><Link className='linkbutton' to='/about'>About</Link></li>
                    <li><Link className='linkbutton' to='/contact'>Contact</Link></li>
                </ul>
                <div className='image'></div>
            </div>
        </div>
        )}
        </div>
    )
}}
import React from 'react';
import MenuInfo from '../Components/MenuInfo'
import '../css/menu.css'

export default class Menu extends React.Component {
    render(){
        return(
            <div className='menuBackground'>
            <div><MenuInfo /></div>
            </div>
        )

    }
}
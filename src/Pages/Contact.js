import React from 'react';
import {ContactUs} from '../Components/Email'
import '../css/email.css'

export default class Contact extends React.Component {
    render(){
        return(
            <div className='formholder'>
                <ContactUs />
            </div>
        )

    }
}
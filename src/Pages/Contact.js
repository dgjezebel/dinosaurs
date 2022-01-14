import React from 'react';
import {ContactUs} from '../Components/Email'
import '../css/email.css'

export default class Contact extends React.Component {
    render(){
        return(
        <>
            <div className='contactDiv'>
                <div className='contactGreeting'>
                    <p>
                    Feel free to send 
                    us any comments or questions and we'll get 
                    back to you within 24 hours. We look forward to working with you!
                    </p>
                </div>
            
                <div className='formholder'>
                <ContactUs />
                </div>
            </div>
        </>
        )
    }
}
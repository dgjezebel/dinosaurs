import React from 'react';
import '../css/gallery.css'
import {images} from '../Components/galleryDatabase'
export default class Gallery extends React.Component {
    render(){
        return(
            <div className='galleryDiv'>
                <img className='galleryimage' src={images[0]}/>
                <img className='galleryimage' src={images[1]}/>
                <img className='galleryimage' src={images[2]}/>
                <img className='galleryimage' src={images[3]}/>
            </div>
        )

    }
}
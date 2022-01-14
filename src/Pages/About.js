import React from 'react';
import '../css/about.css'

export default class Menu extends React.Component {
    render(){
        return(
            <div className='aboutDiv'>
                <div className='letter'>
                    <h2>
                        With the world changing to a new normal, we decided to open AB Catering to bring comfort food directly to your table.
                        Our mission is to bring you the best homestyle cooking right to your door. We use only the freshest ingredients, and we add a little bit of love to everything we bake.
                    </h2>
                    <h2> 
                        We are located in Philadelphia, PA. We serve the tri-state 
                        area and offer free delivery within a 25-mile radius of our location.
                        We are always up for a challenge and welcome special requests!
                    </h2>
                    <h2>
                        We look forward to serving your next get together with family and friends.
                    </h2>
                    <br/>
                    <h2 style={{ textAlign:'right' }}>
                        -sincerely, Al and Brandy.
                    </h2>
                </div>
            </div>
        )

    }
}
import React from 'react';
import './Greatest-outdoors.styles.css'

const GreatestOutDoors = ({menu,setMenu}) => {

    const closeOutSide = () => {
        setMenu( false)
    }
    return (
        <div className='whole-greatest-outdoors' onClick={closeOutSide} >
            <div className="image-container">
                <div className="effect">
                    
                <div className="texts">
                    <span className="title">The Greatest Outdoors</span>
                    <span className="subtitle">Wishlists curated by Airbnb.</span>
                </div>

                <button className="black-button">Get inspired</button>


                </div>
                <img src="https://a0.muscache.com/im/pictures/f0343d6a-328c-4213-90a2-13ba3572a01f.jpg?im_q=medq&im_w=720" alt="" />
                

            </div>
            
        </div>
    )
}

export default GreatestOutDoors;

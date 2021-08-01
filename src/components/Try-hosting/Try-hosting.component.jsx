import React from 'react';
import './Try-hosting.styles.css'

const TryHosting = ({menu,setMenu}) => {

    const closeOutSide = () => {
        setMenu(false)
    };
    return (
        <div className='try-hosting' onClick={closeOutSide} >
        <div className="image-container">
            <div className="effect">

        <div className="texts">
            <span className="title">Try hosting</span>
            <span className="subtitle">Earn extra income and unlock new<br/> opportunities by sharing your space.</span>
        </div>
        <button className="black-button">learn more</button>


            </div>

                <img src="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq&im_w=720" alt="" />

        </div>
        
    </div>
    )
}

export default TryHosting

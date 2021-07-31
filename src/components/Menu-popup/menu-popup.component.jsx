import React from 'react';
import './Menu-popup.styles.css';

const MenuPopup = (props) => {
    return (
        <div className='whole-block' hidden={props.hidden} >
            <p>Sign up</p>
            <p>Log in</p>
            <hr />
            <p>Host your home</p>
            <p>Host an experience</p>
            <p>Help</p>
        </div>
    )
}

export default MenuPopup

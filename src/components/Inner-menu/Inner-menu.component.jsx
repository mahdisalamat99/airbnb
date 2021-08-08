import React,{useContext} from 'react';
import './Inner-menu.styles.css'
import { LoginContext,MainContext } from '../../pages/Main/MainContext';


const InnerMenu = (props) => {
    const [login,setLogin] = useContext(LoginContext)
    const [menu,setMenu] = useContext(MainContext)
    


    return (
        <frameElement>
        <div className='whole-block-inner' >
            <p  >Messages</p>
            <p >Notifications</p>
            <p >Trips</p>
            <p >Wishlists</p>
            <hr />
            <p>Host your home</p>
            <p>Host an experience</p>
            <p>Refer a host</p>
            <p>Account</p>
            <hr />
            <p>Help</p>
            <p>Log out</p>
        </div>
            
        </frameElement>
    )
}

export default InnerMenu

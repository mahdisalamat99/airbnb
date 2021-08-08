import React,{useContext} from 'react';
import './Menu-popup.styles.css';
import LoginAndSignUp from '../Login-signup/Login-signup.component';
import { LoginContext,MainContext } from '../../pages/Main/MainContext';
import HostYourHome from '../../pages/Host-your-home/Host-your-home'


const MenuPopup = (props) => {
    const [login,setLogin] = useContext(LoginContext)
    const [menu,setMenu] = useContext(MainContext)
    

    const showLogin = (props) => {
        setLogin (!login)
        
        
        
    }
    return (
        <frameElement>
        <div className='whole-block' >
            <p  onClick={showLogin} >Log in</p>
            <p onClick={showLogin}>Sign up</p>
            <hr />
            <p>Host your home</p>
            <p>Host an experience</p>
            <p>Help</p>
        </div>
            { login ? <LoginAndSignUp/> : null }
        </frameElement>
    )
}

export default MenuPopup

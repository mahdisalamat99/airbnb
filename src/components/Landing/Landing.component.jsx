import React,{useState} from 'react';
import './Landing.styles.css';
import{ ReactComponent as Logo} from '../../images/airbnb.svg';
import MenuPopup from '../Menu-popup/Menu-popup.component';
import LangAndCurrency from '../Lang-and-currency/Lang-and-currency.component';

const LandingComponent = () => {

const [navbar,setNavbar] = useState(false);
const [menu,setMenu] = useState(true);
const [language,setLanguage] = useState(true)






const changeBackground = () => {
    if (window.scrollY >= 1) {
        setNavbar(true);
    } else {
        setNavbar(false);
    }
};




window.addEventListener('scroll',changeBackground);

const showMenu = (e) => {
    setMenu (prev => !prev);
}

const showLanguage = () => {
    setLanguage(  prev => !prev   )
}



const outSideClose = (e) => {
    if( e.target.id !==  'profile-container'  ){
        setMenu(true)
    }
}
window.addEventListener('click',outSideClose);

    return (
        <div className='landing' >
            <div className="container">
              
            </div>

            <MenuPopup hidden={menu} />
            <LangAndCurrency hidden={language} />


            
                <div className={navbar? 'menu-container active' : 'menu-container'}>

                    <a href="#">
                        <Logo className='logo' >
                            
                        </Logo>
                    </a>

                    <div className={navbar ? 'search-box active' : 'search-box'}>
                        <input className='search-txt' type="text" placeholder='Start your search' />
                            <div className="search-btn">
                                <i class="fas fa-search"></i>
                            </div>
                        
                    </div>

                    <nav >
                        <li className={navbar ? 'become-host active' : 'become-host'} >Become a host</li>
                        <li className={navbar ? 'lang-icon active' : 'lang-icon'} onClick={showLanguage} ><i class="fas fa-globe"></i></li>
                        <li>
                            <div className='profile-container' id='profile-container' onClick={showMenu} >
                                <i class="fas fa-bars  bar "></i>
                                <i class="fas fa-user-circle  user "></i>
                                
                            </div>
                        </li>
                    </nav>


                </div>




            

            <div className="caption">
                <p>Not sure where to go?Perfect.</p>
                <button className='btn-land' ><span className='btn-text' >I'm flexible</span></button>
            </div>
        </div>
    )
}

export default LandingComponent;

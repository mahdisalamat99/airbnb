import React,{useContext} from 'react';
import './Footer.styles.css'
import { MainContext,LanguageContext } from "../../pages/Main/MainContext";
import {Link} from 'react-router-dom'

const Footer = () => {
    const [menu,setMenu] = useContext(MainContext);
    const [language,setLanguage] = useContext(LanguageContext);

    
    const closeOutSide = () => {
        setMenu(false)
    };

    const showLang = () => {
        setLanguage(!language)
    }
    return (
        <div className='whole-footer' onClick={closeOutSide} >
            <div className="top-footer">

           <ul className="about">
               <li>How Airbnb works</li>
               <li>Newsroom</li>
               <li>Airbnb 2021</li>
               <li>Investors</li>
               <li>Investors</li>
               <li>Airbnb Plus</li>
               <li>Airbnb Luxe</li>
               <li>HotelTonight</li>
               <li>Airbnb for Work</li>
               <li>Made possible by Hosts</li>
               <li>Careers</li>
               <li>Founders' Letter</li>
           </ul>

           <ul className="community">
               <li>Diversity & Belonging</li>
               <li>Against Discrimination</li>
               <li>Accessibility</li>
               <li>Airbnb Associates</li>
               <li>Frontline Stays</li>
               <li>Guest Referrals</li>
               <li>Gift cards</li>
               <li>Airbnb.org</li>
           </ul>

           <ul className="host">
               <li>Host your home</li>
               <li>Host an Online Experience</li>
               <li>Host an Experience</li>
               <li>Responsible hosting</li>
               <li>Resource Center</li>
               <li>Community Center</li>
           </ul>

           <ul className="support">
               <li>Our COVID-19 Response</li>
               <li>Help Center</li>
               <li>Cancellation options</li>
               <li>Neighborhood Support</li>
               <li>Trust & Safety</li>
           </ul>

            </div>

            <div className="bottom-footer">
                <div className="footer-left">
                    <Link to='/'>
                    <div className="item">
                        <span>© 2021 Airbnb, Inc.</span>
                    </div>
                    </Link>
                    <Link to='/terms'>
                    <div className="item">
                        <span>Privacy</span>
                    </div>
                    </Link>
                    <Link to='/terms'>
                    <div className="item">
                        <span>Terms</span>
                    </div>
                    </Link>
                    <Link to='/site-map'>
                    <div className="item">
                        <span>Sitemap</span>
                    </div>
                    </Link>
                </div>

                <div className="footer-right">
                    <div className="item" onClick={showLang}>
                        English
                    </div>
                    <div className="item" onClick={showLang}>
                        EUR
                    </div>
                    <div className="item">
                    <i class="fab fa-instagram-square"></i>
                    </div>
                    <div className="item">
                    <i class="fab fa-twitter"></i>
                    </div>
                    <div className="item">
                    <i class="fab fa-facebook-f"></i>
                    </div>
                    
                    
                </div>

                

            </div>
        </div>
    )
}

export default Footer

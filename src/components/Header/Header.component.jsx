import React,{useContext} from 'react'
import SvgComponent from "./SvgComponent";
import {
    LanguageContext,
    MainContext,
    NavbarContext,
    LoginContext,
    CurrentUserContext,
  } from "../../pages/Main/MainContext";

const Header = () => {
    const [menu, setMenu] = useContext(MainContext);
    const [language, setLanguage] = useContext(LanguageContext);
    const [navbar, setNavbar] = useContext(NavbarContext);
    const [login, setLogin] = useContext(LoginContext);
    const [isLogined, setIsLogined] = useContext(CurrentUserContext)

    const changeBackground = () => {
        if (window.scrollY >= 1) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
    
      window.addEventListener("scroll", changeBackground);
    
      const handleClick = () => {
        setMenu(!menu);
        
      };
    
      
      const showLang = () => {
        setLanguage(!language);
      };
     
    return (
        <div>
            <div className={navbar ? "menu-container active" : "menu-container"}>
          <a href="#">
            <SvgComponent color={navbar ? "#ff385c" : "#fff"} />
          </a>

          <div className={navbar ? "search-box active" : "search-box"}>
            <input
              className="search-txt"
              type="text"
              placeholder="Start your search"
            />
            <div className="search-btn">
              <i class="fas fa-search"></i>
            </div>
          </div>

          <nav>
            <li className={navbar ? "become-host active" : "become-host"}>
              Become a host
            </li>
            <li
              className={navbar ? "lang-icon active" : "lang-icon"}
              onClick={showLang}
              id="lang-btn"
            >
              <i class="fas fa-globe"></i>
            </li>
            <li>
              <div
                className="profile-container"
                id="profile-container"
                onClick={handleClick}
              >
                <i class="fas fa-bars  bar "></i>
                <i class="fas fa-user-circle  user "></i>
              </div>
            </li>
          </nav>
        </div>
        </div>
    )
}

export default Header

import React, { useContext } from "react";
import "./Landing.styles.css";
import MenuPopup from "../Menu-popup/Menu-popup.component";
import SvgComponent from "./SvgComponent";
import InnerMenu from "../Inner-menu/Inner-menu.component";
import LangAndCurrency from "../Lang-and-currency/Lang-and-currency.component";
import {
  LanguageContext,
  MainContext,
  NavbarContext,
  LoginContext,
  CurrentUserContext,
} from "../../pages/Main/MainContext";

const LandingComponent = () => {
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

  const closeOutSide = () => {
    setMenu(false);
    setLanguage(false);
  };

  const showLang = () => {
    setLanguage(!language);
  };
 
  return (
    <frameElement>
      <div className="landing">
        <div className="container" onClick={closeOutSide}></div>

        {/* {menu && <MenuPopup />} */}

        {isLogined ? <InnerMenu/> : menu ? <MenuPopup/> : undefined}

        {language && <LangAndCurrency />}

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

        <div className="caption">
          <p>Not sure where to go?Perfect.</p>
          <button className="btn-land">
            <span className="btn-text">I'm flexible</span>
          </button>
        </div>
      </div>
    </frameElement>
  );
};

export default LandingComponent;

import React,{useState, createContext} from 'react';

 export  const MainContext = createContext();
 export const LanguageContext = createContext()
 export const NavbarContext = createContext();
 export const LoginContext = createContext();
 export const CurrentUserContext = createContext();
 export const UserDataContext = createContext();

export const MainProvider = (props) => {
    const [menu, setMenu] = useState(false);
    return (
        <MainContext.Provider value={[menu,setMenu]}  >
                 {props.children}  
        </MainContext.Provider>
    );
}

export const LanguageProvider = (props) => {
    const [language, setLanguage] = useState(false);
    
    return (
        <LanguageContext.Provider value={[language,setLanguage]}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export const NavbarProvider = (props) => {
    const [navbar, setNavbar] = useState(false);
    return(

    <NavbarContext.Provider value={[navbar,setNavbar]}>
        {props.children}
    </NavbarContext.Provider>
    )
}

export const LoginProvider = (props) => {
    const [login , setLogin] = useState(false)

    return (
        <LoginContext.Provider value={[login,setLogin]}>
            {props.children}
        </LoginContext.Provider>
    )
}

export const CurrentUserProvider = (props) => {
    const [isLogined , setIsLogined] = useState(false)

    return (
        <CurrentUserContext.Provider value={[isLogined,setIsLogined]}>
            {props.children}
        </CurrentUserContext.Provider>
    )
}

export const UserDataProvider = (props) => {
    const[userdata, setuserdata] = useState(false)

    return (
        <UserDataContext.Provider value={[userdata,setuserdata]}>
            {props.children}
        </UserDataContext.Provider>
    )
}



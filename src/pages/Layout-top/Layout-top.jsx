import React from 'react'
import Header from '../../components/Header/Header.component'
import {
    MainProvider,
    LanguageProvider,
    NavbarProvider,
    LoginProvider,
    CurrentUserProvider,
  } from "../Main/MainContext";

const LayoutTop = () => {
    return (
        <MainProvider>
      <LanguageProvider>
        <NavbarProvider>
          <LoginProvider>
            <CurrentUserProvider>
        <div>
            <Header/>
        </div>
        </CurrentUserProvider>
        </LoginProvider>
        </NavbarProvider>
        </LanguageProvider>
        </MainProvider>




    )
}

export default LayoutTop

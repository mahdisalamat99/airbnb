import React from 'react'
import Footer from '../../../components/Footer/Footer.component';
import {
    MainProvider,
    LanguageProvider,
    
  } from "../MainContext";

const LayoutBottom = () => {
    return (
        <MainProvider>
            <LanguageProvider>
        <div>
            
                <Footer/>
            
        </div>
        </LanguageProvider>
        </MainProvider>
       

    )
}

export default LayoutBottom

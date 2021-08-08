import React,{useEffect} from "react";
import DiscoverExperiences from "../../components/Discover-experiences/Discover-experiences.component";
import ExploreNearby from "../../components/Explore-nearby/Explore-nearby.component";
import Footer from "../../components/Footer/Footer.component";
import GreatestOutDoors from "../../components/Greatest-outdoors/Greatest-outdoors.component";
import Inspiration from "../../components/Inspiration/Inspiration.component";
import LandingComponent from "../../components/Landing/Landing.component";
import LiveAnyWhere from "../../components/Live-anywhere/Live-anywhere.component";
import TryHosting from "../../components/Try-hosting/Try-hosting.component";
import { MainProvider,LanguageProvider, NavbarProvider, LoginProvider, CurrentUserProvider } from "./MainContext";



const Main = () => {
  

  useEffect(() => {
   
    
    
  }, []);


  return (
    <MainProvider>
      <LanguageProvider>
        <NavbarProvider>
          <LoginProvider>
            <CurrentUserProvider>
      <div>
        <frameElement>
          <LandingComponent/>
          <ExploreNearby  />
          <LiveAnyWhere  />
          <GreatestOutDoors  />
          <DiscoverExperiences  />
          <TryHosting  />
          <Inspiration  />
          <Footer  />
        </frameElement>
      </div>
            </CurrentUserProvider>
          </LoginProvider>
        </NavbarProvider>
      </LanguageProvider>
    </MainProvider>
  );
};

export default Main;

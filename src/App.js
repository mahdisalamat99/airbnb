import React from 'react';
import './App.css';
import LandingComponent from './components/Landing/Landing.component';
import ExploreNearby from './components/Explore-nearby/Explore-nearby.component';
import LiveAnyWhere from './components/Live-anywhere/Live-anywhere.component';
import GreatestOutDoors from './components/Greatest-outdoors/Greatest-outdoors.component';
import DiscoverExperiences from './components/Discover-experiences/Discover-experiences.component';
import TryHosting from './components/Try-hosting/Try-hosting.component';
import Inspiration from './components/Inspiration/Inspiration.component';
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <frameElement>
      <LandingComponent/>
      <ExploreNearby/>
      <LiveAnyWhere/>
      <GreatestOutDoors/>
      <DiscoverExperiences/>
      <TryHosting/>
      <Inspiration/>
      <Footer/>
    </frameElement>
    
  );
}

export default App;

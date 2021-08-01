import React,{useState} from 'react'
import DiscoverExperiences from '../../components/Discover-experiences/Discover-experiences.component'
import ExploreNearby from '../../components/Explore-nearby/Explore-nearby.component'
import Footer from '../../components/Footer/Footer.component'
import GreatestOutDoors from '../../components/Greatest-outdoors/Greatest-outdoors.component'
import Inspiration from '../../components/Inspiration/Inspiration.component'
import LandingComponent from '../../components/Landing/Landing.component'
import LiveAnyWhere from '../../components/Live-anywhere/Live-anywhere.component'
import TryHosting from '../../components/Try-hosting/Try-hosting.component'

const Main = () => {
    const [menu, setMenu] = useState(false);

   
        return (
        <div>
            <frameElement>
            <LandingComponent menu={menu} setMenu={setMenu} />
            <ExploreNearby menu={menu} setMenu={setMenu}/>
            <LiveAnyWhere menu={menu} setMenu={setMenu} />
            <GreatestOutDoors menu={menu} setMenu={setMenu} />
            <DiscoverExperiences menu={menu} setMenu={setMenu} />
            <TryHosting menu={menu} setMenu={setMenu} />
            <Inspiration menu={menu} setMenu={setMenu} />
            <Footer menu={menu} setMenu={setMenu}/>
            </frameElement>
        </div>
    )
}

export default Main

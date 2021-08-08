import React,{useContext} from 'react';
import './Discover-experiences.styles.css'
import { MainContext } from "../../pages/Main/MainContext";


const DiscoverExperiences = () => {
    const [menu,setMenu] = useContext(MainContext);
    const closeOutSide = () => {
        setMenu(false)
    };
    return (
        <div className='whole-discover-experiences' onClick={closeOutSide} >
            <div className="title">Discover Experiences</div>
            <div className="subtitle">Unique activities with local experts—in person or online.</div>
            <div className="items-container">

                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720" alt=""  />
                    <div className="item-name"> 
                        <span className='title-span' >Experiences</span> 
                        <span className='sub-des' >Local things to do, wherever you are.</span> 
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720" alt=""  />
                    <div className="item-name">
                         <span className='title-span' >Online Experiences</span>
                         <span className='sub-des' >Live, interactive activities led by Hosts.</span> 
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720" alt=""  />
                    <div className="item-name">
                         <span className='title-span' >Featured collection: Wanderlust</span>
                         <span className='sub-des' >Travel from home with Online Experiences.</span>
                     </div>
                </div>
               

            </div>
            
        </div>
    )
}

export default DiscoverExperiences

import React,{useContext} from 'react';
import './/Explore-nearby.styles.css'
import { MainContext } from "../../pages/Main/MainContext";


const ExploreNearby = () => {
    const [menu,setMenu] = useContext(MainContext);
    const closeOutSide = () => {
        setMenu(false)
    };
    return (
        <div className='whole-explore-nearby' onClick={closeOutSide} >
            <div className="title">Explore Nearby</div>
            <div className="items-container">

                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/45351ee3-97eb-480a-beaf-7a8e6fa096d4.jpg?im_q=medq&im_w=240" alt="Amsterdam" />
                    <div className="describe">
                    <div className="item-name">Amsterdam</div>
                    <div className="item-distance">15 minute drive</div>
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=720" alt="The Hague" />
                    <div className="describe">
                    <div className="item-name">The Hague</div>
                    <div className="item-distance">1.5 hour drive</div>
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=720" alt="Rotterdam" />
                    <div className="describe">
                    <div className="item-name">Rotterdam</div>
                    <div className="item-distance">1.5 hour drive</div>
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=720" alt="Zandvoort" />
                    <div className="describe">
                    <div className="item-name">Zandvoort</div>
                    <div className="item-distance">45 minute drive</div>
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/24e04078-6c6d-4827-93bf-c2d246570199.jpg?im_q=medq&im_w=720" alt="Utrecht" />
                    <div className="describe">
                    <div className="item-name">Utrecht</div>
                    <div className="item-distance">45 minute drive</div>
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/3849e3f1-d275-43fb-8957-4c90f26e14db.jpg?im_q=medq&im_w=720" alt="Haarlem" />
                    <div className="describe">
                    <div className="item-name">Haarlem</div>
                    <div className="item-distance">30 minute drive</div>
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=720" alt="Groningen" />
                    <div className="describe">
                    <div className="item-name">Groningen</div>
                    <div className="item-distance">2.5 hour drive</div>
                    </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg?im_q=medq&im_w=720" alt="Maastricht" />
                    <div className="describe">
                    <div className="item-name">Maastricht</div>
                    <div className="item-distance">3 hour drive</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ExploreNearby;

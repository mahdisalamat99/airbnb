import React,{useContext} from 'react';
import './Live-anywhere.styles.css'; 
import { MainContext } from "../../pages/Main/MainContext";


const LiveAnyWhere = () => {
    const [menu,setMenu] = useContext(MainContext);
    const closeOutSide = () => {
        setMenu(false)
    };
    return (
        <div className='whole-live-anywhere' onClick={closeOutSide} >
            <div className="title">Live anywhere</div>
            <div className="items-container">

                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720" alt=""  />
                    <div className="item-name"> <span>Outdoor getaways</span> </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720" alt=""  />
                    <div className="item-name"> <span>Outdoor getaways</span> </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720" alt=""  />
                    <div className="item-name"> <span>Outdoor getaways</span> </div>
                </div>
                <div className="item">
                    <img className="item-image" src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720" alt=""  />
                    <div className="item-name"> <span>Outdoor getaways</span> </div>
                </div>

            </div>
        </div>
    )
}

export default LiveAnyWhere;

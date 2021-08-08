import React,{useContext} from 'react';
import './Inspiration.styles.css';
import { MainContext } from "../../pages/Main/MainContext";


const Inspiration = () => {
    const [menu,setMenu] = useContext(MainContext);
    const closeOutSide = () => {
        setMenu(false)
    };
    return (
        <div className='whole-inspiration' onClick={closeOutSide} >
           <div className="main-title">Inspiration for future getaways</div> 
           <div className="section-title-container">
               <div className="section-title">Destinations for arts & culture</div>
               <div className="section-title">Destinations for outdoor adventure</div>
               <div className="section-title">Mountain cabins</div>
               <div className="section-title">Beach destinations</div>
               <div className="section-title">Popular destinations</div>
           </div>
           <div className="items-container">

               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               <div className="item">
                   <div className="main-name">Lake Martin</div>
                   <div className="sub-name">Alabama</div>
               </div>
               

           </div>
        </div>
    )
}

export default Inspiration

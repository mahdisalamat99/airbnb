import React from 'react'
import MenuPopup from '../Menu-popup/Menu-popup.component'
import InnerMenu from '../Inner-menu/Inner-menu.component'


const MainMenu = ({loggedin}) => {

    return (
        <div>
             {loggedin ? <InnerMenu /> : <MenuPopup />}
        </div>
    )
}

export default MainMenu

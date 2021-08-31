import MenuPopup from "./Menu-popup.component";
import InnerMenu from "../Inner-menu/Inner-menu.component";

export default function MainMenupopup({ loggedin }) {
  console.log(200, loggedin);
  return <div>{loggedin ? <InnerMenu /> : <MenuPopup />}</div>;
}
import { NavLink } from "react-router-dom";
import close from "../assets/close.png"

function Sidebar(props) {
    const { display, closeSidebar } = props;

    return (
        <div id="sidebar" className={display}>
            <button className="menu-btn" onClick={closeSidebar}>
                <img src={close} className="menu-icon" />
            </button>

            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/favourites">Favourites</NavLink>
            </ul>
        </div>
    )
}

export default Sidebar;
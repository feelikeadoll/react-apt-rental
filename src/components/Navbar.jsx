import logo from "../assets/logo-home.png"
import menu from "../assets/menu.png"
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div id="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt={"logo"} id="logo-img"/></Link>
                <h1>Home <span className ="sweet-orange">Sweet</span> Home</h1>
            </div>
            <div>
                <img src={menu} alt="menu-icon" id="menu-icon"/>
            </div>
        </div>
    )
}

export default Navbar;

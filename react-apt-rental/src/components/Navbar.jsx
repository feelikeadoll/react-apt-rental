import logo from "../assets/logo.png"
import menu from "../assets/menu.png"

function Navbar(props) {
    return (
        <div id="navbar">
            <div class="logo">
                <img src={logo} alt={"logo"} id="logo-img"/>
                <h1>{props.name}</h1>
            </div>
            <div>
                <img src={menu} alt="menu-icon" id="menu-icon"/>
            </div>
        </div>
    )
}

export default Navbar;
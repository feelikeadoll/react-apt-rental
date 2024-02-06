import logo from "../assets/logo-home.png"
import menu from "../assets/menu.png"

function Navbar(props) {
    return (
        <div id="navbar">
            <div className="logo">
                <img src={logo} alt={"logo"} id="logo-img"/>
                <h1>Home <span className ="sweet-orange">Sweet</span> Home</h1>
            </div>
            <div>
                <img src={menu} alt="menu-icon" id="menu-icon"/>
            </div>
        </div>
    )
}

export default Navbar;

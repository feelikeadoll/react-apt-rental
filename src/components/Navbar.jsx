import logo from "../assets/logo-home.png"
import menu from "../assets/menu.png"
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Navbar(props) {

    const [display, setDisplay] = useState("hidden")

    const openSidebar = () => {
        setDisplay("sidebar")
    }

    const closeSidebar = () => {
        setDisplay("hidden")
    }

    return (
        <div id="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt={"logo"} id="logo-img" /></Link>
                <h1>Home <span className="sweet-orange">Sweet</span> Home</h1>
            </div>
            <div>
                <button className="menu-btn" onClick={openSidebar}>
                    <img src={menu} alt="menu-icon" className="menu-icon" />
                </button>
                <Sidebar display={display} closeSidebar={closeSidebar}/>
            </div>
        </div>
    )
}

export default Navbar;

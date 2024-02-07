import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div id="sidebar">
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
            </ul>
        </div>
    )
}

export default Sidebar;
import logo from "../assets/logo.png"

function Navbar(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={logo} alt={"logo"} />
        </div>
    )
}

export default Navbar;
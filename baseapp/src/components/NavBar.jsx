import LogoM from "../assets/LogoM.png"
import "../styles/NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
        <img src={LogoM} alt="Miguel Logo" className="LogoM"></img>
        <div className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar
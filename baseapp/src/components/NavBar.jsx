import LogoM from "../assets/LogoM.png"
import "../styles/NavBar.css"
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"

const NavBar = (props) => {

  const navigate = useNavigate()
  const location = useLocation()

  function linkRota(rota){
    if(rota) navigate(rota)
  }

  return (
    <nav className="navbar" style={props.style}>
        <img src={LogoM} alt="Miguel Logo" className="LogoM" onClick={() => linkRota("/")}></img>
        <div className="navLinks">
            <Link to="/" className="links">Home</Link>
            {location.pathname !== "/contact" && <Link to="/contact" className="links">Contact</Link>}
            {location.pathname !== "/projects" && <Link to="/projects" className="links">Projects</Link>}
            {location.pathname !== "/aboutme" && <Link to="/aboutme" className="links">About Me</Link>}
        </div>
    </nav>
  )
}

export default NavBar
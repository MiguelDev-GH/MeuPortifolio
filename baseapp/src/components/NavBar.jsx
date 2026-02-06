import LogoM from "../assets/LogoM.png"
import "../styles/NavBar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const NavBar = () => {

  const navigate = useNavigate()

  function linkRota(rota){
    if(rota) navigate(rota)
  }

  return (
    <nav className="navbar">
        <img src={LogoM} alt="Miguel Logo" className="LogoM" onClick={() => linkRota("/")}></img>
        <div className="navLinks">
            <Link to="/" className="links">Home</Link>
            <Link to="/contact" className="links">Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar
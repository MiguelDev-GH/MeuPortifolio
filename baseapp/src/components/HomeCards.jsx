import {BriefcaseBusinessIcon, CircleUserRound, Link, Phone} from "lucide-react"
import { useNavigate } from "react-router-dom"

function HomeCards(props){

  const style = {
    borderBottom:`solid 10px ${props.cor}`
  }

  const navigate = useNavigate()

  const navegateHandle = () =>{
    if(props.rota){navigate(props.rota)}
  }

  return (
    <div className="HomeCards" style={style} onClick={navegateHandle}>
      {props.titulo === "Projects" && <BriefcaseBusinessIcon/>}
      {props.titulo === "About me" && <CircleUserRound/>}
      {props.titulo === "Social Medias & Contact" && <Phone />}
        <h3 className="Titulo">{props.titulo}</h3>
        <p className="Descrição">{props.descricao}</p>
    </div>
  )
}

export default HomeCards

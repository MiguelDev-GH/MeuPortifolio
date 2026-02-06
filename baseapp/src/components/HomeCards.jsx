import {BriefcaseBusinessIcon, CircleUserRound, Phone} from "lucide-react"
import {useNavigate} from "react-router-dom"

function HomeCards(props){

  const navigate = useNavigate()

  const navegateHandle = () =>{
    if(props.rota){navigate(props.rota)}
  }

  return (
    <div className="HomeCards" onClick={navegateHandle} style={{'--animationTempo':props.animationTempo}}>
      <div>
        {props.titulo === "Projects" && <BriefcaseBusinessIcon/>}
        {props.titulo === "About me" && <CircleUserRound/>}
        {props.titulo === "Social Medias & Contact" && <Phone />}
        <h3 className="Titulo">{props.titulo}</h3>
      </div>
        <p className="Descrição">{props.descricao}</p>
    </div>
  )
}

export default HomeCards

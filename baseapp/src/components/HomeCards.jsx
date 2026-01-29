import {BriefcaseBusinessIcon, CircleUserRound, Phone} from "lucide-react"

function HomeCards(props){
  return (
    <div className="HomeCards">
      {props.titulo == "Projects" && <BriefcaseBusinessIcon/>}
      {props.titulo == "About me" && <CircleUserRound/>}
      {props.titulo == "Contact" && <Phone/>}
        <h3 className="Titulo">{props.titulo}</h3>
        <p className="Descrição">{props.descricao}</p>
    </div>
  )
}

export default HomeCards

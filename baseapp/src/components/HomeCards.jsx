function HomeCards(props){
  return (
    <div className="HomeCards">
        <h3 className="Titulo">{props.titulo}</h3>
        <p className="Descrição">{props.descricao}</p>
    </div>
  )
}

export default HomeCards

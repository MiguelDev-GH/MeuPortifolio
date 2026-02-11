function ProjectCards(props){
    return <div className="ProjectCards" style={props.style} >
        <input type="radio" id={props.id} name="project"/>
            <label htmlFor={props.id} className="cardArea">
                <h1 className="titulo">{props.texto}</h1>
                <div className="conteudoCard">
                    <p>oljkashjdklasjdlkasjdlkajslkdjaslkjdlkasjldkaslkjdssl</p>
                </div>
            </label>
    </div>
}

export default ProjectCards
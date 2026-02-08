import ProjectCards from "../components/ProjectCards"
import "../styles/Projects.css"

export const Projects = () => {

    const projetos = ["Projeto 1", "Trabalho de sei la o que", "Tododads", "sdasldassdl", "llkasndoi" , "llkasndoi", "llkasndoi", "llkasndoi", "llkasndoi"]

    return (
        <div className="Projects">

            <h1 className="mainTitulo">My Projects</h1>

            <div className="ProjectCardsDiv">

                {projetos.map((projeto,index)=>(
                    <ProjectCards
                    texto={`${index}- ${projeto}`}
                    style={{'--tempoAparecer':`${index/5}s`}}
                    />
                ))}

            </div>
        </div>
    )
}
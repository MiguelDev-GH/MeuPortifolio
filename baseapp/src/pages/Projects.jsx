import ProjectCards from "../components/ProjectCards"
import "../styles/Projects.css"

export const Projects = () => {
    return (
        <div className="Projects">

            <h1 className="titulo">My Projects</h1>

            <div className="ProjectCardsDiv">
                <ProjectCards
                texto="Titulo 1"
                />

                <ProjectCards
                texto="Titulo 2"
                />
            </div>
        </div>
    )
}
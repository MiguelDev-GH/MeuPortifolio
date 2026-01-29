import "../styles/Home.css"
import HomeCards from "../components/HomeCards"

export const Home = () => {
  return(
    <div className="Home">
        <h1 className="home-titulo">Miguel</h1>
        <p>Welcome to my portifolio!</p>
        <h2>See more:</h2>
        <div className="CardsDiv">
            
            <HomeCards 
            titulo="Projects" 
            descricao="Here are all my projects (In development or not)"
            />

            <HomeCards 
            titulo="About me" 
            descricao="Here you will find the real me, my knowledge"
            />

            <HomeCards 
            titulo="About me" 
            descricao="Here you will find the real me, my knowledge"
            />
        </div>
    </div>
  )
}

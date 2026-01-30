import "../styles/Home.css"
import HomeCards from "../components/HomeCards"

export const Home = () => {
  return(
    <div className="Home">
        <h1 className="home-titulo">Miguel</h1>
        <p>Welcome to my portifolio!</p>
        <div className="CardsDiv">

            <div>
            <HomeCards 
            titulo="Projects" 
            descricao="Here are all my projects (In development or not)"
            cor="#22223b"
            />
            </div>

            <HomeCards 
            titulo="About me" 
            descricao="Here you will find the real me, my knowledge"
            cor="#9a8c98"
            />

            <HomeCards 
            titulo="Social Medias & Contact" 
            descricao="You can found my social medias e things like email for contact"
            cor="#8d99ae"
            />
        </div>

        <div className="bg-dec1"></div>
    </div>
  )
}

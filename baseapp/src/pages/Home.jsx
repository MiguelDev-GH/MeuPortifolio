import "../styles/Home.css"
import HomeCards from "../components/HomeCards"
import LogoM from "../assets/LogoM.png"

export const Home = () => {

  const numRandom = (min,max) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
  }

  return(
    <div className="Home">

        <div className="bgEffect">
          <span style={{'--posX':numRandom(7,93) + "%",'--size':numRandom(30,150) + "px",'--backdropBlur':numRandom(1,4) + "px",'--velocity':numRandom(8,22) + "s",'--zindex':numRandom(-1,4), '--delay':numRandom(0,6) + "s"}}/>
          <span style={{'--posX':numRandom(7,93) + "%",'--size':numRandom(30,150) + "px",'--backdropBlur':numRandom(1,4) + "px",'--velocity':numRandom(8,22) + "s",'--zindex':numRandom(-1,4), '--delay':numRandom(0,6) + "s"}}/>
          <span style={{'--posX':numRandom(7,93) + "%",'--size':numRandom(30,150) + "px",'--backdropBlur':numRandom(1,4) + "px",'--velocity':numRandom(8,22) + "s",'--zindex':numRandom(-1,4), '--delay':numRandom(0,6) + "s"}}/>
          <span style={{'--posX':numRandom(7,93) + "%",'--size':numRandom(30,150) + "px",'--backdropBlur':numRandom(1,4) + "px",'--velocity':numRandom(8,22) + "s",'--zindex':numRandom(-1,4), '--delay':numRandom(0,6) + "s"}}/>
          <span style={{'--posX':numRandom(7,93) + "%",'--size':numRandom(30,150) + "px",'--backdropBlur':numRandom(1,4) + "px",'--velocity':numRandom(8,22) + "s",'--zindex':numRandom(-1,4), '--delay':numRandom(0,6) + "s"}}/>
          <span style={{'--posX':numRandom(7,93) + "%",'--size':numRandom(30,150) + "px",'--backdropBlur':numRandom(1,4) + "px",'--velocity':numRandom(8,22) + "s",'--zindex':numRandom(-1,4), '--delay':numRandom(0,6) + "s"}}/>
          <span style={{'--posX':numRandom(7,93) + "%",'--size':numRandom(30,150) + "px",'--backdropBlur':numRandom(1,4) + "px",'--velocity':numRandom(8,22) + "s",'--zindex':numRandom(-1,4), '--delay':numRandom(0,6) + "s"}}/>
          <span style={{'--posX':numRandom(7,93) + "%",'--size':numRandom(30,150) + "px",'--backdropBlur':numRandom(1,4) + "px",'--velocity':numRandom(8,22) + "s",'--zindex':numRandom(-1,4), '--delay':numRandom(0,6) + "s"}}/>
        </div>

        <img src={LogoM} alt="Miguel Logo" className='LogoMHome'></img>
        <div className="home-titulo">
          <h1>Miguel</h1>
          <h2>Software Engineering Student</h2>
        </div>
        <div className="CardsDiv">

            <HomeCards 
            titulo="Projects" 
            descricao="Here are all my projects (In development or not)"
            cor="#22223b"
            />

            <span className="homeCardBorder"></span>

            <HomeCards 
            titulo="About me" 
            descricao="Here you will find the real me, my knowledge"
            cor="#9a8c98"
            rota="/aboutme"
            />

            <span className="homeCardBorder"></span>

            <HomeCards 
            titulo="Social Medias & Contact" 
            descricao="You can found my social medias e things like email for contact"
            cor="#8d99ae"
            />
        </div>

    </div>
  )
}

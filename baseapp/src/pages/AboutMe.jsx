import {Github} from 'lucide-react'
import '../styles/AboutMe.css'
import SkillCard from '../components/SkillCards'

export const AboutMe = () => {
  return (
    <div className="AboutMe">

      <div className='fundoEffect'></div>

        <div className="nome">
          <h4 style={{"--animationDelay":"0.2s"}}>Miguel</h4>
          <h4 style={{"--animationDelay":"0.4s"}}>Chagas</h4>
          <h4 style={{"--animationDelay":"0.6s"}}>Maciel</h4>
        </div>

        <h1>About Me</h1>

        <h3>What i already used to build something:</h3>

        <div className='competenciasIcon'>

            <SkillCard 
              titulo="Front-End & Design"
              skills={[
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="React logo"  />,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css logo"  />,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="HTML logo"  />,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" height="40" alt="Canva logo"  />,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" height="40" alt="Streamlit logo"/>
              ]}/>

            <SkillCard
            titulo="Programming Languages"
            skills={[
              <img src="https://skillicons.dev/icons?i=c" height="40" alt="c logo"  />,
              <img src="https://skillicons.dev/icons?i=cpp" height="40" alt="cplusplus logo"  />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JS logo"  />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="Python logo"  />,
            ]}/>

            <SkillCard
            titulo="Back-End"
            skills={[
              <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" height="40" alt="NodeJS logo"/>,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" height="40" alt="Sequelize logo"/>
          
            ]}/>

            <SkillCard
            titulo="Tools"
            skills={[
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="Git logo"  />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" height="40" alt="Github logo" />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" height="40" alt="GoogleColab logo" />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" height="40" alt="VSCode logo" />,  
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg" height="40" alt="NeoVim logo" />
            ]}/>

            <SkillCard
            titulo="Database"
            skills={[
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="mysql logo"  />
            ]}/>

            <SkillCard
            titulo="OS"
            skills={[
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg" height="40" alt="ArchLinux logo"/>
            ]}/>

        </div>

          <h3> Overview </h3>

          <p>
            I'm a 3rd-semester Software Engineering student and an aspiring Full Stack developer. 
            I've been coding since I was 13, constantly seeking new knowledge to bring innovation 
            to the market.
          </p>

          <p>
            I am currently studying Software Engineering at the Instituto Brasileiro de Desenvolvimento 
            e Pesquisa (IDP) and I am deeply passionate about the field.
          </p>

          <p>
            During my academic coursework, I gained practical experience with <b>C</b>, specifically in <span className='colorPYTHON'><b>Data Structures</b></span> 
            . One highlight was developing a numerical expression calculator using stack 
            data structures with my team.
          </p>

          <a href="https://github.com/MiguelDev-GH/Trabalho-de-Estrutura-Pilha" className='trabEstruturaLink' target='_'><Github/>Project Repository</a>

          <p>
            I hold a Technical High School degree, where I excelled in technology subjects such as 
            Databases, Web Design, Computer Fundamentals, and Programming Logic. Driven by curiosity,
            I went beyond the classroom curriculum during this period to self-study 
            <span className="colorJS"> JavaScript</span>,  
            <span className='colorPYTHON'> Python</span>,
            <span className="colorHTML"> HTML</span> and <span className="colorCSS">CSS</span>.
          </p>

    </div>
  )
}

export default AboutMe

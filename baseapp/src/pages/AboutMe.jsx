import {Github} from 'lucide-react'
import '../styles/AboutMe.css'

export const AboutMe = () => {
  return (
    <div className="AboutMe">
        <h4 className="nome">Miguel Chagas Maciel</h4>
        <h1>About Me</h1>
        <h3>What i already used to build something:</h3>
        <div className='competenciasIcon'>
            <img src="https://skillicons.dev/icons?i=c" height="40" alt="c logo"  />
            <img src="https://skillicons.dev/icons?i=cpp" height="40" alt="cplusplus logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
            <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="mysql logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" height="40" alt="canva logo"  />
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

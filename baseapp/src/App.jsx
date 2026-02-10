import { useLocation, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import { Home, Contact, AboutMe, Projects } from "./pages"

function App(){

  const location = useLocation()

  return (
    <>
      {location.pathname !== "/" && <NavBar style={{'--tempoAnimarVar':'2s'}}/>}
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App
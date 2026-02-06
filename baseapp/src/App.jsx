import {useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import { Home, Contact, AboutMe } from "./pages"

function App(){

  const location = useLocation()

  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App
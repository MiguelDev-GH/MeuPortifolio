import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import { Home, Contact } from "./pages"


function App(){

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
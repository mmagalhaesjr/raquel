import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Home from './pages/Home/Home';
import Curso from './pages/Curso/Curso';
import Galeria from './pages/Galeria/Galeria';
import CursoCompleto from './pages/CursoCompleto/CursoCompleto';


function App() {


  return (
    <>
  <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/curso" exact element={<Curso />} />
          <Route path="/galeria" exact element={<Galeria />} />
           <Route path="/cursocompleto" exact element={<CursoCompleto />} />

        </Routes>

      </Router>
    </>
  )
}

export default App

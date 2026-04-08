import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Loguin from './pages/Curso/Loguin/Loguin';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Palestras from './pages/Palestras/Palestras';
import Treinamentos from './pages/Treinamentos/Treinamentos';

function App() {


  return (
    <>
  <Router>
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/sobre" exact element={<Sobre />} />
           <Route path="/contato" exact element={<Contato />} />
            <Route path="/palestras" exact element={<Palestras />} />
             <Route path="/treinamento" exact element={<Treinamentos />} />
          
             <Route path="/login" exact element={<Loguin />} />

         
        </Routes>

      </Router>
    </>
  )
}

export default App

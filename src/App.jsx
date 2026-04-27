import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Palestras from './pages/Palestras/Palestras';
import Treinamentos from './pages/Treinamentos/Treinamentos';
import Curso from './pages/Curso/Curso';


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
              <Route path="/curso" exact element={<Curso />} />
             
          
             

         
        </Routes>

      </Router>
    </>
  )
}

export default App

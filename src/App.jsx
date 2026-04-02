import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';

function App() {


  return (
    <>
  <Router>
        <Routes>

          <Route path="/" exact element={<Home />} />
            <Route path="/video" exact element={<Video />} />

         
        </Routes>

      </Router>
    </>
  )
}

export default App


import { 
  BrowserRouter, 
  Routes,
  Route,
 } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import Detail from './pages/Detail';
import Home from './pages/Home';
import Movies from './pages/Movies';
import People from './pages/People';

function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/people" element={<People/>} />
      <Route path="/detail/:id" element={<Detail/>} />
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default App

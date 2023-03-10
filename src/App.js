
import './App.css';
import react from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Album from './components/Album';
import Photos from './components/Photos';
import Todos from './components/Todos';
import Singlephoto from './components/Singlephoto';
import Table from './components/Table';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='About' element={<About/>} />
          <Route exact path='Album' element={<Album/>} />
          <Route exact path='Photos' element={<Photos/>} />
          <Route exact path='Todos' element={<Todos/>} />
          <Route exact path='SinglePhoto/:id' element={<Singlephoto/>} />
          <Route exact path='Dashboard/*' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

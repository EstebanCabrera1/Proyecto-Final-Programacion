import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from "./components/grid/Grid";
import PagLogin from "./components/pagLogin/PagLogin";
import PagRegister from './components/pagLogin/pagRegister';
import Contactos from './components/contactos/Contactos';
import Burguer from './components/burguer/Burguer';
import Axios from './components/axios/Axios';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Grid/>} />
          <Route path="/login" element={<PagLogin/>} />
          <Route path="/register" element={<PagRegister/>} />
          <Route path="/contactos" element= {<Contactos/>} />
          <Route path="/burguer" element= {<Burguer/>} />
          <Route path="/axios" element= {<Axios/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

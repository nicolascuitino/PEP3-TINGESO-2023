import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './Components/MenuComponent';
import PreguntaBasicoComponent from './Components/PreguntaBasicoComponent';
import PreguntaIntermedioComponent from './Components/PreguntaIntermediaComponent';
import PreguntaAvanzadoComponent from './Components/PreguntaAvanzadoComponent';
import ResultadosComponent from './Components/ResultadosComponent';
import NewPreguntaComponent from './Components/NewPreguntaComponent';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/PruebaBasico" element={<PreguntaBasicoComponent />} />
          <Route path="/resultados" element={<ResultadosComponent />} />
          <Route path="/nuevaPregunta" element={<NewPreguntaComponent />} />
          <Route path="/PruebaIntermedio" element={<PreguntaIntermedioComponent />} />
          <Route path="/PruebaAvanzado" element={<PreguntaAvanzadoComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './Components/MenuComponent';
import PreguntaComponent from './Components/PreguntaComponent';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/pregunta" element={<PreguntaComponent />} />
        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

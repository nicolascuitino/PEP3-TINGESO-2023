import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function ResultadosComponent() {
  const ComenzarFacil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    console.log()
    window.location.href = "/prueba-facil";
  };

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [segundos, setSegundos] = useState(
    localStorage.getItem("segundos") ? localStorage.getItem("segundos") : 0
  );

  const [minutos, setMinutos] = useState(
    localStorage.getItem("minutos") ? localStorage.getItem("minutos") : 0
  );

  const [horas, setHoras] = useState(
    localStorage.getItem("horas") ? localStorage.getItem("horas") : 0
  );

  return (
    <>
      <GlobalStyle />
      <HomeStyle>
        <br></br>
        <div className="resultados">
          <h1>
            <b>
              <u>Tu puntaje final es: {puntaje}.0/ 7.0</u>
            </b>
          </h1>
          <h1>Tiempo utilizado:</h1>
          <h1>
            <b>
              {horas} horas, {minutos} minutos y {segundos} segundos.
            </b>
          </h1>
          {puntaje == 7 ? (
            <h1>¡¡¡Felicitaciones!!!</h1>
          ) : (
            <h1>Sigue intentandolo o intenta una prueba con menor dificultad.</h1>
          )}
        </div>
        <br></br>
        
        <div class = "box-area">
        <div class = "single-box">
            <a href = "/">
             <div class = "img-area">
                </div>
            </a>
              <div class = "img-text">
                <span class = "header-text"><strong>Volver al menú principal</strong></span>
              </div>
        </div>
        </div>
        
        
      </HomeStyle>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body {
  background-color: #262626;
    font-family: 'Trebuchet MS',serif;
}
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;

}

.facil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.resultados{
    padding-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1b3039;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.dificil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.medio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.box-area{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.single-box{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
  margin: 20px;
  padding: 20px;
  transition: .3s
  
  
}

.img-area{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 6px solid #ddd;
  border-radius: 50%;
  padding: 20px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
}

.single-box:nth-child(1) .img-area{
  background-image: url(https://cdn0.iconfinder.com/data/icons/mobile-device/512/return-back-blue-round-2-512.png)
}

.texto-resultados{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    width: 80%;
    margin: auto;
    padding: 20px;
`;
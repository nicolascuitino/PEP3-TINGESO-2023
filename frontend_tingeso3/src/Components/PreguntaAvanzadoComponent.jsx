import React, { Component } from "react";
import styled from "styled-components";
import Texto from "./Texto";
import { createGlobalStyle } from 'styled-components'
import Cronometro from "./Cronometro";

class PreguntaAvanzadoComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        prueba: [],
      
      };
    }


 

    componentDidMount() {

        fetch("http://localhost:8080/pruebaService/post/avanzado")
          .then((response) => response.json())
          .then((data) => this.setState({ prueba: data }));


    }

    

    render() {
        return (
            <div>
        
            <GlobalStyle />
            
            <HomeStyle>
            <header class="header">
                    <div class="logo">
                        <h1>Python Master</h1>
                    </div>
                    <nav>
                    </nav>
                    <a class="btn" href="/"><button>Volver al menú principal</button></a>
                    <a class="btn" href="/resultados"><button>Terminar prueba</button></a>
                    <div class="clock">
                        <Cronometro />
                        <h1></h1>
                    </div>
            </header>
            <h1 className="text-center"> <b>Preguntas de dificultad avanzada</b></h1> 
            <body>
                <div className ="texto">
                    <h1 className="text-center2"> <b>Pregunta 1</b></h1> 
                    <div className ="pregunta1">
                    
                    <Texto
                        code={this.state.prueba.p1_e}
                        resp={this.state.prueba.p1_r}
                        id={this.state.prueba.p1_id}
                    />
                      
                    </div>
                    
                </div>
                
                <div className ="texto">
                <h1 className="text-center"> <b>Pregunta 2</b></h1> 
                    <div className ="pregunta2">
                    
                    <Texto
                        code={this.state.prueba.p2_e}
                        resp={this.state.prueba.p2_r}
                        id={this.state.prueba.p2_id}
                    />
                      
                    </div>
                    
                </div>

                <div className ="texto">
                <h1 className="text-center"> <b>Pregunta 3</b></h1> 
                    <div className ="pregunta3">
                    
                    <Texto
                        code={this.state.prueba.p3_e}
                        resp={this.state.prueba.p3_r}
                        id={this.state.prueba.p3_id}
                    />
                      
                    </div>
                    
                </div>

                <div className ="texto">
                <h1 className="text-center"> <b>Pregunta 4</b></h1> 
                    <div className ="pregunta4">
                    
                    <Texto
                        code={this.state.prueba.p4_e}
                        resp={this.state.prueba.p4_r}
                        id={this.state.prueba.p4_id}
                    />
                      
                    </div>
                    
                </div>
    
            </body>

            
            <h6 className="text-center"> MTINGSW 2023</h6>
            </HomeStyle>
        </div>
        );
    }
}

export default PreguntaAvanzadoComponent;



const GlobalStyle = createGlobalStyle`
    body { 
        background-color: #262626;
        font-family: 'Trebuchet MS',serif;
`
const HomeStyle = styled.nav`


body{
    
    background: #262626
    
}
.texto{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border: 5px solid #FDFEFE;
    
    background: #1b3039;
    padding: 20px;

}
.pregunta1 {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 600px;
    padding-bottom: 20px;
}

.pregunta2 {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 600px;
    padding-bottom: 20px;
}

.pregunta3 {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 600px;
    padding-bottom: 20px;
}

.pregunta4 {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 600px;
    padding-bottom: 20px;
}

.text-center{
    color: #FFFFFF;
}
.text-center2{
    
    color: #FFFFFF;
}

.header{
    background-color: #1b3039;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
}
.header .logo{
    margin-right: auto;
    color: white;
    font-family: 'Trebuchet MS',serif;
}
.header .btn button{
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-family: 'Trebuchet MS',serif;
}
.header .btn button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}
.header .btn-2 button {
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
.header .btn-2 button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}

.header .clock{
    margin-top: 20px;
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
}

.header .puntaje{
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
}

`
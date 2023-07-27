import React, { Component } from "react";
import styled from "styled-components";
import CodeMirror from "@uiw/react-codemirror"
import "codemirror/lib/codemirror.css"
import 'codemirror/theme/dracula.css'
import { createGlobalStyle } from 'styled-components'
import NewPreguntaService from "../Services/NewPreguntaService";


class NewPreguntaComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dificultad: '',
        codigo: 'Escriba el codigo aqui',
        respuesta: ''
      
      }
      this.changeDificultadHandler = this.changeDificultadHandler.bind(this);
      this.changeCodigoHandler = this.changeCodigoHandler.bind(this);
      this.changeRespuestaHandler = this.changeRespuestaHandler.bind(this);
      this.savePregunta = this.savePregunta.bind(this);
    }

    

    savePregunta = (e) => {
        e.preventDefault();
        let proveedor = {dificultad: this.state.dificultad,
                         codigo: this.state.codigo,
                         respuesta: this.state.respuesta};

        NewPreguntaService.createPregunta(proveedor);
    }


    changeCodigoHandler= (event) => {
        this.setState({codigo: event.target.value});
    }

    changeDificultadHandler= (event) => {
        this.setState({dificultad: event.target.value});
    }

    changeRespuestaHandler= (event) => {
        this.setState({respuesta: event.target.value});
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
                
            </header>
            <h1 className="text-center"> <b>Ingresar nueva pregunta de codigo Python</b></h1> 
            
            <form>
                <div className ="texto">
                    <h3 className="text-center2"> <b>Ingrese el código de la pregunta</b></h3> 
                    <div className ="pregunta">
                    
                    <CodeMirror 
                        theme={"dark"}
                        value={this.state.codigo}
                        name="codigo"
                        onChange={(value, viewUpdate) => {
                            this.setState({codigo: value})
                            console.log(value)
                        }}
                    />
                      
                    </div>
                    
                </div>
                

                <div className="texto">
                <h3 className="text-center2"> <b>Ingrese la dificultad y la respuesta</b></h3> 
                <div className = "form-group">
                    <label> Dificultad</label>
                    <input
                            placeholder = "Ingrese la dificultad"
                            name ="dificultad"
                            className = "form-control"
                            value = {this.state.dificultad} onChange={this.changeDificultadHandler}
                    />
                </div>
                <div className = "form-group">
                    <label> Respuesta</label>
                    <input
                            placeholder = "Ingrese la respuesta"
                            name ="respuesta"
                            className = "form-control"
                            value = {this.state.respuesta} onChange={this.changeRespuestaHandler}
                    />
                </div>

                

                <div class = "box-footer">
                    <button className = "btn btn-primary" onClick={this.savePregunta}>
                        Subir
                    </button>
                </div>
                

                </div>
            </form>

           
            
            <h6 className="text-center"> MTINGSW 2023</h6>
            </HomeStyle>
        </div>
        );
    }
}

export default NewPreguntaComponent;



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

.pregunta {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 500px;
    padding-bottom: 20px;
}

.form-group{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    width: 500px;
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
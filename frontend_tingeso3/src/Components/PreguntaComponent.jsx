import React, { Component } from "react";
import styled from "styled-components";
import Texto from "./Texto";
import { createGlobalStyle } from 'styled-components'

class PreguntaComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        datas: [],
      };
    }

    componentDidMount() {
        fetch("http://localhost:8090/preguntas/getall")
          .then((response) => response.json())
          .then((data) => this.setState({ datas: data }));
      }

    render() {
        return (
            <div>
            <GlobalStyle />
            <HomeStyle>
            <h1 className="text-center"> <b>Pregunta 1</b></h1> 
            <body>
                <div className ="texto">
                    <div className ="pregunta1">
                    {this.state.datas.map((datas) => (
                        <Texto
                            code={datas.codigo}
                        />
                    ))}
                      
                    </div>
                </div>
                
    
            </body>

            
            <h6 className="text-center"> MTINGSW 2023</h6>
            </HomeStyle>
        </div>
        );
    }
}

export default PreguntaComponent;



const GlobalStyle = createGlobalStyle`
    body { 
        background-color: #262626;
`
const HomeStyle = styled.nav`


body{
    background: #262626
}
.texto{
    justify-content: center;
    align-items: center;
    display: flex;
}
.pregunta1 {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 500px;
    padding-bottom: 20px;
}


.text-center{
    color: #FFFFFF;
}
`
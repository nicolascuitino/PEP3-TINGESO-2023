import React,{useState} from "react"
//import CodeMirror from "codemirror"
import CodeMirror from "@uiw/react-codemirror"
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import "codemirror/lib/codemirror.css"
import 'codemirror/theme/dracula.css'
import { python } from "codemirror/mode/python/python"
import add_to_puntaje from "./Puntaje";


export default function Texto({code, resp, id}) {
    
    const initialState = {
        answer: "",
      };


    const [puntaje, setPuntaje] = useState(
        localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
    );
    
    const [trueAnswer, setTrueAnswer] = useState(-1);
    
    const [input, setInput] = useState(initialState);

    const changeAnswerHandler = (event) => {
        setInput({ ...input, answer: event.target.value });
      };


    const compararRespuestas = (e) => {
    e.preventDefault();
    if (input.answer == resp) {
        setPuntaje(add_to_puntaje(7));
        setTrueAnswer(1);
    } else {
        setPuntaje(add_to_puntaje(1));
        setTrueAnswer(0);
    }


    };

    return(
        <QuestionStyle>
        <div name="textoContainer">
            
            <div className="textoTitle">
                id: {id}
            </div>

            <div className="cmdiv">
                <CodeMirror 
                    theme={"dark"}
                    value={code}
                    readOnly={true}

                />
            </div>

            <div class="respuesta">
            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="respuesta"
                    value={input.answer}
                    onChange={changeAnswerHandler}
                >
                    <Form.Label className="textoTitle">
                        <h3>Ingrese su respuesta aquí: </h3>
                    </Form.Label>
                    <br></br>
                    <Form.Control type="respuesta" placeholder="" />
                </Form.Group>
            </Form>

            {trueAnswer == 1 ? (
                <h3>¡Respuesta Correcta. Obtienes 7 puntos!</h3>
            ) : trueAnswer == 0 ? (
              <h3>Respuesta Incorrecta. Obtienes 1 punto.</h3>
            ) : (
                <button varian="primary" onClick={compararRespuestas}>
                    Verificar Respuesta
                </button>
            )}

            </div>
            



            
        </div>
        </QuestionStyle>
        

        
    )

    
    
        
}


const QuestionStyle = styled.nav`
.textoTitle{ 
    color: #FFFFFF;
    
}



.cmdiv{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 20px;
}

.respuesta {
    justify-content: center;
    padding-bottom: 50px;
    color: #FFFFFF;
}

button {
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #7dcea0;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
button:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}
`

//var myTextArea = document.getElementById("texto");

//var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
//    lineNumbers: true,
//    readOnly: true,
//    mode: "python",
//    theme: "dracula",
//}).setValue();






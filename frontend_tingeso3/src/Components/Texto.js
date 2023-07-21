import React from "react"
//import CodeMirror from "codemirror"
import CodeMirror from "@uiw/react-codemirror"
import styled from "styled-components";
import "codemirror/lib/codemirror.css"
import 'codemirror/theme/dracula.css'
import "codemirror/mode/python/python"



export default function Texto({code}) {
    

    return(
        
        <div name="textoContainer">
            <QuestionStyle>
            <div className="textoTitle">
                Pregunta 1
            </div>

            <div name="cmdiv">
                <CodeMirror 
                    theme={"dark"}
                    value={code}
                    readOnly={true}

                />
            </div>
            </QuestionStyle>
        </div>
        

        
    )

    
    
        
}


const QuestionStyle = styled.nav`
.textoTitle{ 
    color: #FFFFFF;
`

//var myTextArea = document.getElementById("texto");

//var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
//    lineNumbers: true,
//    readOnly: true,
//    mode: "python",
//    theme: "dracula",
//}).setValue();






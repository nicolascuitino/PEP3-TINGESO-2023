import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'


export default function Menu(){

    const ComenzarFacil = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        window.location.href = "/pregunta";
      };

    return(
        <div>
            <GlobalStyle />
            <HomeStyle>
            <h1 className="text-center"> <b>Python Exam</b></h1>
            <div class = "box-area">
                <div class = "single-box">
                <button type="button" class="btn btn-primary" onClick={ComenzarFacil}>
                    Comenzar
                </button>
                </div>
                <div class = "single-box">
                    <a href = "/new-proveedor">
            <           div class = "img-area">
                        </div>
                    </a>
                    <div class = "img-text">
                        <span class = "header-text"><strong>Ingresar Proveedores</strong></span>
                    </div>
                </div>
                <div class = "single-box">
                    <a href = "/listar">
                        <div class = "img-area">
                        </div>
                    </a>
                    <div class = "img-text">
                        <span class = "header-text"><strong>Ver Proveedores</strong></span>
                    </div>
                </div>
            </div>
            <h6 className="text-center"> MTINGSW 2023</h6>
            </HomeStyle>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
    body { 
        background-color: #262626;
`
const HomeStyle = styled.nav`

.box-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
body{
    background: #262626
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
    background-image: url(https://img.freepik.com/vector-premium/chat-archivo-documento-texto-comentando-o-editando-documentos-linea-ilustracion-dibujos-animados-plana_101884-838.jpg)
}
.single-box:nth-child(2) .img-area{
    background-image: url(http://static1.squarespace.com/static/55c7a3e2e4b0fa365689d8aa/55e0aceae4b0643202e59629/55e322ade4b077beb0266329/1590769127854/?format=1500w)
}
.single-box:nth-child(3) .img-area{
    background-image: url(https://img.freepik.com/vector-gratis/ingresos-netos-calculando-ilustracion-concepto-abstracto-calculo-sueldos-formula-ingresos-netos-salario-neto-contabilidad-corporativa-calculo-ganancias-estimacion-ganancias_335657-1238.jpg?w=2000)
}
.single-box:nth-child(4) .img-area{
    background-image: url(https://previews.123rf.com/images/magurok/magurok1606/magurok160600092/60046224-lado-la-celebraci%C3%B3n-de-solicitud-de-trabajo-aprobado-aprobado-cv-con-el-sello-la-l%C3%ADnea-delgada-plana.jpg)
}
.single-box:nth-child(5) .img-area{
    background-image: url(https://media.istockphoto.com/vectors/agreement-contract-and-offer-color-line-icon-proposal-linear-vector-vector-id1271477227?k=20&m=1271477227&s=612x612&w=0&h=XOSF2ISnfGJZ7bb-fU7rRdDJzTKehDmOF9kcJ5gIEmA=)
}
.header-text{
    font-size: 24px;
    font-weight: 500;
    line-height: 48px;
}
.img-text p{
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
}
.single-box:hover{
    background: #e84393;
    color: #fff;
}
.text-center{
    color: #FFFFFF;
}
`
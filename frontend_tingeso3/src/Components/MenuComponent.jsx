import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'


export default function Menu(){

    const ComenzarFacil = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        window.location.href = "/PruebaBasico";
      };

      const ComenzarIntermedio = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        window.location.href = "/PruebaIntermedio";
      };

      const ComenzarAvanzado = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        window.location.href = "/PruebaAvanzado";
      };

    return(
        <div>
            <GlobalStyle />
            <HomeStyle>
            <header class="header">
                    <div class="logo">
                        <h1>Python Master</h1>
                    </div>

                    <div class="header-img">
                        <img class="img" src="https://img.freepik.com/iconos-gratis/serpientes_318-368381.jpg?w=2000">
                        </img>
                    </div>
                   
            </header>
            <h1 className="text-center"> <b>¡Conviertete en un experto en Python resolviendo nuestras pruebas!</b></h1>
            <div class = "box-area">
                <div class = "single-box" onClick={ComenzarFacil}>
                    <a>
            <           div class = "img-area" >
                        </div>
                    </a>
                    <div class = "img-text">
                        <span class = "header-text"><strong>Comenzar nivel básico</strong></span>
                    </div>
                </div>

                <div class = "single-box" onClick={ComenzarIntermedio}>
                    <a>
            <           div class = "img-area" >
                        </div>
                    </a>
                    <div class = "img-text">
                        <span class = "header-text"><strong>Comenzar nivel intermedio</strong></span>
                    </div>
                </div>

                <div class = "single-box" onClick={ComenzarAvanzado}>
                    <a>
            <           div class = "img-area" >
                        </div>
                    </a>
                    <div class = "img-text">
                        <span class = "header-text"><strong>Comenzar nivel avanzado</strong></span>
                    </div>
                </div>


                <div class = "single-box">
                    <a href = "/nuevaPregunta">
            <           div class = "img-area">
                        </div>
                    </a>
                    <div class = "img-text">
                        <span class = "header-text"><strong>Ingresar Nueva Pregunta</strong></span>
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
        font-family: 'Trebuchet MS',serif;
`
const HomeStyle = styled.nav`

.box-area{
    display: flex;
    flex-direction: column;
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

.header .header-img{
    object-fit: contain;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 6px solid #ddd;
    border-radius: 50%;
    
    background: white;
    
}

.header .header-img .img{
    
    max-width: 100%;
    max-height: 100%;
    
    
}

.single-box:nth-child(1) .img-area{
    background-image: url(https://st2.depositphotos.com/5266903/8119/v/600/depositphotos_81197654-stock-illustration-examination-flat-eco-green-color.jpg)
}
.single-box:nth-child(2) .img-area{
    background-image: url(https://st2.depositphotos.com/5266903/8986/v/600/depositphotos_89861616-stock-illustration-test-form-rounded-vector-icon.jpg)
}
.single-box:nth-child(3) .img-area{
    background-image: url(https://st2.depositphotos.com/5266903/8119/v/600/depositphotos_81198296-stock-illustration-examination-flat-red-color-rounded.jpg)
}
.single-box:nth-child(4) .img-area{
    background-image: url(https://icon-library.com/images/new-item-icon/new-item-icon-12.jpg)
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
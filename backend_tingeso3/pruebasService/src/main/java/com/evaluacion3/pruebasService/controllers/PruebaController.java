package com.evaluacion3.pruebasService.controllers;

import com.evaluacion3.pruebasService.entities.PruebaEntity;
import com.evaluacion3.pruebasService.models.PreguntaModel;
import com.evaluacion3.pruebasService.serivices.PruebaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pruebaService")
public class PruebaController {
    @Autowired
    PruebaService pruebaService;

    @GetMapping("/post/basic")
    public ResponseEntity<PruebaEntity> getPruebaFacil(){
        List<PreguntaModel> preguntas = pruebaService.obtenerPreguntasBasico();
        PruebaEntity nuevaPrueba = pruebaService.postPrueba(preguntas, "basico");
        if(nuevaPrueba == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(nuevaPrueba);
    }

    @GetMapping("/post/intermedio")
    public ResponseEntity<PruebaEntity> getPruebaIntermedio(){
        List<PreguntaModel> preguntas = pruebaService.obtenerPreguntasIntermedio();
        PruebaEntity nuevaPrueba = pruebaService.postPrueba(preguntas, "intermedio");
        if(nuevaPrueba == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(nuevaPrueba);
    }

    @GetMapping("/post/avanzado")
    public ResponseEntity<PruebaEntity> getPruebaAvanzado(){
        List<PreguntaModel> preguntas = pruebaService.obtenerPreguntasAvanzado();
        PruebaEntity nuevaPrueba = pruebaService.postPrueba(preguntas, "avanzado");
        if(nuevaPrueba == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(nuevaPrueba);
    }



}

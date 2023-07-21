package com.evaluacion3.pruebasService.controllers;

import com.evaluacion3.pruebasService.entities.PruebaEntity;
import com.evaluacion3.pruebasService.models.PreguntaModel;
import com.evaluacion3.pruebasService.serivices.PruebaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pruebaService")
public class PruebaController {
    @Autowired
    PruebaService pruebaService;

    @GetMapping("/post/facil")
    public PruebaEntity getPruebaFacil(@RequestBody PreguntaModel preguntaModel){
        List<PreguntaModel> preguntas = pruebaService.obtenerPreguntasFacil();
        PruebaEntity nuevaPrueba = pruebaService.postPrueba(preguntas, "facil");
        return nuevaPrueba;
    }



}

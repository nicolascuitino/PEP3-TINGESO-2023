package com.evaluacion3.preguntasService.controllers;

import com.evaluacion3.preguntasService.entities.PreguntaEntity;
import com.evaluacion3.preguntasService.services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/preguntas")
public class PreguntaController {
    @Autowired
    PreguntaService preguntaService;

    @PostMapping("/post")
    public String postPregunta(@RequestBody PreguntaEntity preguntaEntity){
        preguntaService.postPregunta(preguntaEntity);
        return "La pregunta se ha creado con exito";
    }

    @GetMapping("/getall")
    public ResponseEntity<ArrayList<PreguntaEntity>> getPreguntas(){
        ArrayList<PreguntaEntity> preguntas = preguntaService.getPreguntas();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @DeleteMapping("/delete/{id]")
    public String deletePregunta(@PathVariable Integer id){
        preguntaService.deletePregunta(id);
        return "Se ha eliminado la pregunta con id: " + id;
    }

}

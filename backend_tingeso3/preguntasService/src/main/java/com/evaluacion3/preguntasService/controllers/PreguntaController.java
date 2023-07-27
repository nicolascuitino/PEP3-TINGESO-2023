package com.evaluacion3.preguntasService.controllers;

import com.evaluacion3.preguntasService.entities.PreguntaEntity;
import com.evaluacion3.preguntasService.services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/preguntaService")
public class PreguntaController {
    @Autowired
    PreguntaService preguntaService;

    @PostMapping("/post")
    public String postPregunta(@RequestBody PreguntaEntity preguntaEntity){
        preguntaService.postPregunta(preguntaEntity);
        return "La pregunta se ha creado con exito";
    }

    @PostMapping("/post2")
    public ResponseEntity<PreguntaEntity> postPregunta2(@RequestBody PreguntaEntity pregunta){
        PreguntaEntity newPregunta = preguntaService.postPregunta(pregunta);
        return ResponseEntity.ok(newPregunta);
    }

    @GetMapping("/getall")
    public ResponseEntity<ArrayList<PreguntaEntity>> getPreguntas(){
        ArrayList<PreguntaEntity> preguntas = preguntaService.getPreguntas();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @DeleteMapping("/delete/{id}")
    public String deletePregunta(@PathVariable Integer id){
        preguntaService.deletePregunta(id);
        return "Se ha eliminado la pregunta con id: " + id;
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<PreguntaEntity> getPregunta(@PathVariable Integer id){
        PreguntaEntity pregunta = preguntaService.getPregunta(id);
        if(pregunta == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(pregunta);
    }

    @GetMapping("/get/basico")
    public ResponseEntity<List<PreguntaEntity>> getPreguntasFacil(){
        List<PreguntaEntity> preguntas = preguntaService.getPreguntasBasico();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/get/intermedio")
    public ResponseEntity<List<PreguntaEntity>> getPreguntasIntermedio(){
        List<PreguntaEntity> preguntas = preguntaService.getPreguntasIntermedio();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/get/avanzado")
    public ResponseEntity<List<PreguntaEntity>> getPreguntasAvanzado(){
        List<PreguntaEntity> preguntas = preguntaService.getPreguntasAvanzado();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

}

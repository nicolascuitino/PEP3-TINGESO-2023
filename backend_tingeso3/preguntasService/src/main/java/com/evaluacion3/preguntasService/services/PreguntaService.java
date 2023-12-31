package com.evaluacion3.preguntasService.services;

import com.evaluacion3.preguntasService.entities.PreguntaEntity;
import com.evaluacion3.preguntasService.repositories.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class PreguntaService {
    @Autowired
    PreguntaRepository preguntaRepository;

    public PreguntaEntity postPregunta(PreguntaEntity pregunta){
        return preguntaRepository.save(pregunta);
    }

    public void postPreguntaArg(String dif, String cod, String resp){
        PreguntaEntity preg = new PreguntaEntity();
        preg.setDificultad(dif);
        preg.setCodigo(cod);
        preg.setRespuesta(resp);

    }

    public ArrayList<PreguntaEntity> getPreguntas(){
        return (ArrayList<PreguntaEntity>) preguntaRepository.findAll();
    }

    public void deletePregunta(Integer id){
        preguntaRepository.deleteById(id);
    }

    public PreguntaEntity getPregunta(Integer id){
        ArrayList<PreguntaEntity> preguntas = (ArrayList<PreguntaEntity>) preguntaRepository.findAll();
        return preguntas.get(id-1);
    }

    public List<PreguntaEntity> getPreguntasBasico(){
        ArrayList<PreguntaEntity> preguntas = (ArrayList<PreguntaEntity>) preguntaRepository.findByDificultad("basico");
        List<PreguntaEntity> cuatroPreguntas = new ArrayList<>();
        Random rndm = new Random();
        List<Integer> usados = new ArrayList<>();
        Integer i = 0;
        while(i < 4){
            Integer a = rndm.nextInt(preguntas.size());
            if(!usados.contains(a)){
                usados.add(a);
                cuatroPreguntas.add(preguntas.get(a));
                System.out.println(preguntas.get(a));
                i = i + 1;
            }
        }
        return cuatroPreguntas;
    }

    public List<PreguntaEntity> getPreguntasIntermedio(){
        ArrayList<PreguntaEntity> preguntas = (ArrayList<PreguntaEntity>) preguntaRepository.findByDificultad("intermedio");
        List<PreguntaEntity> cuatroPreguntas = new ArrayList<>();
        Random rndm = new Random();
        List<Integer> usados = new ArrayList<>();
        Integer i = 0;
        while(i < 4){
            Integer a = rndm.nextInt(preguntas.size());
            if(!usados.contains(a)){
                usados.add(a);
                cuatroPreguntas.add(preguntas.get(a));
                i = i + 1;
            }
        }
        return cuatroPreguntas;
    }

    public List<PreguntaEntity> getPreguntasAvanzado(){
        ArrayList<PreguntaEntity> preguntas = (ArrayList<PreguntaEntity>) preguntaRepository.findByDificultad("avanzado");
        List<PreguntaEntity> cuatroPreguntas = new ArrayList<>();
        Random rndm = new Random();
        List<Integer> usados = new ArrayList<>();
        Integer i = 0;
        while(i < 4){
            Integer a = rndm.nextInt(preguntas.size());
            if(!usados.contains(a)){
                usados.add(a);
                cuatroPreguntas.add(preguntas.get(a));
                i = i + 1;
            }
        }
        return cuatroPreguntas;
    }
}

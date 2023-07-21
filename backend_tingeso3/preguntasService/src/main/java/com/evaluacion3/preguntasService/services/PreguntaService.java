package com.evaluacion3.preguntasService.services;

import com.evaluacion3.preguntasService.entities.PreguntaEntity;
import com.evaluacion3.preguntasService.repositories.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PreguntaService {
    @Autowired
    PreguntaRepository preguntaRepository;

    public PreguntaEntity postPregunta(PreguntaEntity pregunta){
        return preguntaRepository.save(pregunta);
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
}

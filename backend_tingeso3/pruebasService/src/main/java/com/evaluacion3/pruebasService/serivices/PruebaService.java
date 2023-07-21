package com.evaluacion3.pruebasService.serivices;

import com.evaluacion3.pruebasService.entities.PruebaEntity;
import com.evaluacion3.pruebasService.models.PreguntaModel;
import com.evaluacion3.pruebasService.repositories.PruebaRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class PruebaService {

    @Autowired
    PruebaRepository pruebaRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    RestTemplate restTemplate;

    public List<PreguntaModel> obtenerPreguntasFacil() {
        List<PreguntaModel> preguntas = restTemplate.getForObject("http://gateway-service:8080/preguntaService/get/facil", List.class);
        return objectMapper.convertValue(preguntas, new TypeReference<>(){
        });
    }

    public PruebaEntity postPrueba(List<PreguntaModel> preguntas, String dificultad){
        PruebaEntity nuevaPrueba = new PruebaEntity();
        nuevaPrueba.setP1_id(preguntas.get(0).getId());
        nuevaPrueba.setP2_id(preguntas.get(1).getId());
        nuevaPrueba.setP3_id(preguntas.get(2).getId());
        nuevaPrueba.setP4_id(preguntas.get(3).getId());
        nuevaPrueba.setDificultad(dificultad);
        nuevaPrueba.setPuntaje(0);

        return pruebaRepository.save(nuevaPrueba);
    }

    public ArrayList<PruebaEntity> getPruebas(){
        return (ArrayList<PruebaEntity>) pruebaRepository.findAll();
    }

    public void deletePrueba(Integer id){
        pruebaRepository.deleteById(id);
    }

}

package com.evaluacion3.preguntasService.repositories;

import com.evaluacion3.preguntasService.entities.PreguntaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreguntaRepository extends JpaRepository<PreguntaEntity, Integer> {

    List<PreguntaEntity> findByDificultad(String dificultad);

}

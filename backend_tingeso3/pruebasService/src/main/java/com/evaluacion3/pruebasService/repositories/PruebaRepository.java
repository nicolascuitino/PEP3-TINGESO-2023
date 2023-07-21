package com.evaluacion3.pruebasService.repositories;

import com.evaluacion3.pruebasService.entities.PruebaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PruebaRepository extends JpaRepository<PruebaEntity, Integer> {
}

package com.evaluacion3.pruebasService.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "pruebas")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PruebaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer p1_id;
    private Integer p2_id;
    private Integer p3_id;
    private Integer p4_id;
    private String dificultad;
    private Integer puntaje;


}

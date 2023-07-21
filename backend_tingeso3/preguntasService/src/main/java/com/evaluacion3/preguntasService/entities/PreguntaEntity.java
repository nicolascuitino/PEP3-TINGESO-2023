package com.evaluacion3.preguntasService.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "preguntas")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PreguntaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String dificultad;
    private String codigo;
    private String respuesta;

}

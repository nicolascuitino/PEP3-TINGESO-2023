package com.evaluacion3.pruebasService.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PreguntaModel {

    private Integer id;
    private String dificultad;
    private String codigo;
    private String respuesta;

}

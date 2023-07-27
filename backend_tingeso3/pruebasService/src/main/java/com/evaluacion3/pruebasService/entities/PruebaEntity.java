package com.evaluacion3.pruebasService.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

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
    @Column(columnDefinition="TEXT", length = 1000)
    private String p1_e;
    private String p1_r;
    private Integer p2_id;
    @Column(columnDefinition="TEXT", length = 1000)
    private String p2_e;
    private String p2_r;
    private Integer p3_id;
    @Column(columnDefinition="TEXT", length = 1000)
    private String p3_e;
    private String p3_r;
    private Integer p4_id;
    @Column(columnDefinition="TEXT", length = 1000)
    private String p4_e;
    private String p4_r;

    private String dificultad;
    private Integer puntaje;


}

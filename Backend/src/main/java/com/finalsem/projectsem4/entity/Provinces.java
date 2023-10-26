package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Data
@Entity
@Table(name = "provinces")
public class Provinces {
    @Id
    private String code;

    @Column(name = "name")
    private String name;

    @Column(name="name_en")
    private String nameEn;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "full_name_en")
    private String fullNameEn;

    @Column(name = "code_name")
    private String codeName;

    @OneToMany(mappedBy = "provinces")
    @JsonIgnore
    private List<Districts> districts;

    @ManyToOne
    @JoinColumn(name = "unit_id")
    private Units units;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private Regions regions;
}

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
@Table(name = "districts")
public class Districts {
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

    @ManyToOne
    @JoinColumn(name = "province_code")
    private Provinces provinces;

    @ManyToOne
    @JoinColumn(name = "unit_id")
    private Units units;

    @OneToMany(mappedBy = "districts")
    @JsonIgnore
    private List<Wards> wards;
}

package com.finalsem.projectsem4.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @author Ly Quoc Trong
 */
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "wards")
public class Wards {
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
    @JoinColumn(name = "district_code")
    private Districts districts;

    @ManyToOne
    @JoinColumn(name = "unit_id")
    private Units units;
}

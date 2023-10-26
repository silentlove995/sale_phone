package com.finalsem.projectsem4.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Data
@Entity
@Table(name = "units")
public class Units {
    @Id
    private Integer id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name="full_name_en")
    private String fullNameEn;

    @Column(name = "short_name")
    private String shortName;

    @Column(name="short_name_en")
    private String shortNameEn;

    @Column(name = "code_name")
    private String codeName;

    @Column(name = "code_name_en")
    private String codeNameEn;

    @OneToMany(mappedBy = "units")
    private List<Provinces> provinces;

    @OneToMany(mappedBy = "units")
    private List<Wards> wards;

    @OneToMany(mappedBy = "units")
    private List<Districts> districts;
}

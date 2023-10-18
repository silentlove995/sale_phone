package com.finalsem.projectsem4.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Brands extends BaseEntity {
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "brands")
    private List<Categories> categories;

    @OneToMany(mappedBy = "brands")
    private List<Products> products;
}

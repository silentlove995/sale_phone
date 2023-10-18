package com.finalsem.projectsem4.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Categories extends BaseEntity {
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "categories")
    private List<Products> products;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brands brands;
}

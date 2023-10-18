package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class ProductImages extends BaseEntity {
    @Column(name = "name")
    private String name;

    @Column(name = "data", length = 5000000)
    @Lob
    private String data;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE}, targetEntity = Products.class)
    @JoinColumn(name = "product_id")
    @JsonBackReference
    private Products product;
}

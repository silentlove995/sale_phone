package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.sql.Blob;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Pictures extends BaseEntity {
    @Column(name = "name")
    private String name;

    @Column(name = "data",length=100000)
    @Lob
    private byte[] data;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE}, targetEntity = Products.class)
    @JoinColumn(name = "product_id")
    @JsonBackReference
    private Products product;
}

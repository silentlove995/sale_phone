package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Categories extends BaseEntity {
    @Column(name = "name")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "categoryId")
    private List<Products> products = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brands brandId;
}

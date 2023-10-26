package com.finalsem.projectsem4.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @author Ly Quoc Trong
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Comments extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "user_id")
    @org.hibernate.annotations.Index(name="idx_user_id")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @org.hibernate.annotations.Index(name="idx_product_id")
    private Products product;

    @Lob
    @Column(name="content", length=2048)
    private String content;
}

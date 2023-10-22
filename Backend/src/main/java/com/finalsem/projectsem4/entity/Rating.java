package com.finalsem.projectsem4.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

/**
 * @author Ly Quoc Trong
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Rating extends BaseEntity {

    @Column(name="star_rating")
    private int starRating;

    @Lob
    @Column(name="rating_comment", length=2048)
    private String ratingComment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;
}

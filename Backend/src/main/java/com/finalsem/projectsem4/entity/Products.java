package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Products extends BaseEntity {

    @Column(name = "name") // name of product
    private String name;

    @Column(name = "model") // model san pham
    private String model;

    @Column(name="color")
    private String color;

    @Column(name = "stock_quantity") // so luong san pham co trong kho
    private Integer stockQuantity;

    @Lob
    @Column(name = "description", length=50000) // mo ta san pham
    private String description;

    @Column(name = "tech_description",length=100000)
    @Lob
    private String technologyDescription;

    @Column(name = "original_price") // gia goc
    private BigDecimal originalPrice;

    @Column(name = "discount") // giam gia
    private String discount;

    @Column(name = "sale_price") // gia ban
    private BigDecimal salePrice;

    @OneToMany(mappedBy = "product", cascade = {CascadeType.ALL}, fetch= FetchType.EAGER)
    @JsonManagedReference
    private List<ProductImages> pictures;

    @OneToMany(mappedBy = "product")
    private List<Comments> comments;

    @OneToMany(mappedBy = "product")
    private List<OrderDetails> orderDetails;

    @ManyToOne
    @JoinColumn(name = "category_id") // loai san pham ( dien thoai, laptop, may tinh bang, phu kien)
    private Categories categories;

    @ManyToOne
    @JoinColumn(name = "brand_id") // hang san xuat
    private Brands brands;
}

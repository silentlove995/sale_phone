package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
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
    @JsonIgnore
    private List<ProductImages> pictures;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Comments> comments;

    @OneToMany(mappedBy = "productId")
    @JsonIgnore
    private List<OrderDetails> orderDetails;

    @ManyToOne
    @JoinColumn(name = "category_id") // loai san pham ( dien thoai, laptop, may tinh bang, phu kien)
    private Categories categoryId;

    @ManyToOne
    @JoinColumn(name = "brand_id") // hang san xuat
    private Brands brandId;
}

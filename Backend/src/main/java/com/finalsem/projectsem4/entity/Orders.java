package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.finalsem.projectsem4.common.enums.Status;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Orders extends BaseEntity {

    @Column(name = "order_status",nullable = false)
    private Status orderStatus;

    @Column(name = "total_amount", nullable = false)
    private BigDecimal totalAmount;

    @Lob
    @Column(name = "shipping_address", length = 512, nullable = false)
    private String shippingAddress;

    @JsonIgnore
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderDetails> orderDetails = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "users_id")
    private Users users;
}

package com.finalsem.projectsem4.entity;

import com.finalsem.projectsem4.common.enums.Status;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Orders extends BaseEntity {

    @Column(name = "order_status")
    private Status orderStatus;

    @Column(name = "total_amount")
    private String totalAmount;

    // One order can have multiple orderItem
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItems> orderItems = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "users_id")
    private Users users;
}

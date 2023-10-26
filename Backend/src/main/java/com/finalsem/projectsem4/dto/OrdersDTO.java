package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.finalsem.projectsem4.common.enums.Status;
import lombok.*;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OrdersDTO extends AbstractDTO {
    private Status orderStatus;
    private String totalAmount;
    private String shippingAddress;
//    @JsonIgnore
//    private List<OrderDetailsDTO> orderItems;
    private Long userId;
}

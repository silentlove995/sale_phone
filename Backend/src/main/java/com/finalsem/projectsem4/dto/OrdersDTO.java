package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.finalsem.projectsem4.common.enums.Status;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OrdersDTO {
    private Status orderStatus;
    private String totalAmount;
    private List<OrderItemsDTO> orderItems;
}

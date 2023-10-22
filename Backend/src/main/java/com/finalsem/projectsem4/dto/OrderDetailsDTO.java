package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.List;

/**
 * @author silen
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OrderDetailsDTO extends AbstractDTO {
    private Integer quantity;
    private Double price;
    private Double discount;
    private Double subTotal;
    private Long productId;
    private Long orderId;
}

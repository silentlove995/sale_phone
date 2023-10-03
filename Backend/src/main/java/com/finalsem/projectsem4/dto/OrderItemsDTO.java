package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import java.util.List;

/**
 * @author silen
 */
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OrderItemsDTO {
    private Integer quantity;
    private Double price;
    private Double discount;
    private Double subTotal;
    private List<ProductDTO> products;
}

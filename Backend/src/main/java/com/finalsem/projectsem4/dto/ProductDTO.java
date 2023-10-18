package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.finalsem.projectsem4.entity.Comments;
import com.finalsem.projectsem4.entity.ProductImages;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

/**
 * @author silen
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductDTO extends AbstractDTO {
    private String name;
    private String model;
    private String color;
    private Integer stockQuantity;
    private String description;
    private String technologyDescription;
    private BigDecimal originalPrice;
    private BigDecimal discount;
    private BigDecimal salePrice;
    private List<ProductImagesDTO> pictures;
    private List<CommentsDTO> comments;
    private List<OrderDetailsDTO> orderDetails;
    private Long categoryId;
    private Long brandId;
}

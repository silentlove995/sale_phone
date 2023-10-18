package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CategoryDTO extends AbstractDTO {
    private String name;
    private Long brandId;
    private List<ProductDTO> products;
}

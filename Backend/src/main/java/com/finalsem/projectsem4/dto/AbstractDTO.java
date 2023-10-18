package com.finalsem.projectsem4.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Ly Quoc Trong
 */
@Data
public class AbstractDTO {
    private Long id;
    private Long createdAt;
    private Long updatedAt;
    private String createdBy;
    private String updatedBy;
}

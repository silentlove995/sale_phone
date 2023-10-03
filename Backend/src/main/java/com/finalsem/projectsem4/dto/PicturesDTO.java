package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Lob;

/**
 * @author silen
 */
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PicturesDTO {
    private String name;
    private byte[] data;
}

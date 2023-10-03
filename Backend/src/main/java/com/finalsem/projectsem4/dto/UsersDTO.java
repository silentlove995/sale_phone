package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.finalsem.projectsem4.entity.Orders;
import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * @author silen
 */
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UsersDTO {
    private Long id;
    private String username;
    private String fullName;
    private String email;
    private String phone;
    private List<String> roles;
    private List<Orders> orders;
}

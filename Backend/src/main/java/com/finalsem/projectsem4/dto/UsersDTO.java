package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.finalsem.projectsem4.entity.Orders;
import lombok.*;

import java.util.List;

/**
 * @author silen
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UsersDTO extends AbstractDTO {
    private String username;
    private String fullName;
    private String email;
    private String phone;
    private String address;
    private List<String> roles;
    private List<Orders> orders;
}

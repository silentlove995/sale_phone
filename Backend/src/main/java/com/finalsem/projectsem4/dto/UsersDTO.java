package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.finalsem.projectsem4.entity.Orders;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @author silen
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UsersDTO extends AbstractDTO {
    private String username;
    private String fullName;
    private String email;
    private String phone;
    private String address;
    @JsonIgnore
    private List<String> roles = new ArrayList<>();
    @JsonIgnore
    private List<Orders> orders = new ArrayList<>();
}

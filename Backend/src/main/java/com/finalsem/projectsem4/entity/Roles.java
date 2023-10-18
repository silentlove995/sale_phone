package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.finalsem.projectsem4.common.enums.ERoles;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Roles extends BaseEntity {
    @Column(name = "role_name",nullable = false)
    private ERoles name;

    @ManyToMany(mappedBy = "roles")
    @JsonIgnore
    Set<Users> users;
}

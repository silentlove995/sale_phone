package com.finalsem.projectsem4.dto.authen;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * @author Ly Quoc Trong
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PasswordDTO {
    private Long id;
    @NotBlank
    @Size(min = 3 , max = 50)
    private String username;
    @NotBlank
    @Size(min = 6 ,max = 100)
    private String currentPassword;
    @NotBlank
    @Size(min = 6 ,max = 100)
    private String newPassword;
}

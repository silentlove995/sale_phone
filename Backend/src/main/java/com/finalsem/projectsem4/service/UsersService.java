package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.UsersDTO;
import com.finalsem.projectsem4.dto.authen.JwtResponse;
import com.finalsem.projectsem4.dto.authen.LoginDTO;
import com.finalsem.projectsem4.dto.authen.PasswordDTO;
import com.finalsem.projectsem4.dto.authen.SignupDTO;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
public interface UsersService {
    ResponseBuilder<List<UsersDTO>> getAllUsers();

    ResponseBuilder<UsersDTO> getUsersById(Long id);

    ResponseBuilder<UsersDTO> createUsers(SignupDTO dto);

    ResponseBuilder<UsersDTO> updateUsers(UsersDTO dto);

    ResponseBuilder<UsersDTO> deleteUsers(Long id);

    JwtResponse login(LoginDTO loginDTO);

    ResponseBuilder<?> changePassword(PasswordDTO passwordDTO);

    public UserDetails loadUserByUsername(String username);
}

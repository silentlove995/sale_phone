package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.UsersDTO;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
public interface UsersService {
    ResponseBuilder<List<UsersDTO>> getAllUsers();

    ResponseBuilder<UsersDTO> getUsersById(Long id);

    ResponseBuilder<UsersDTO> createUsers(UsersDTO dto);

    ResponseBuilder<UsersDTO> updateUsers(UsersDTO dto);

    ResponseBuilder<UsersDTO> deleteUsers(Long id);
}

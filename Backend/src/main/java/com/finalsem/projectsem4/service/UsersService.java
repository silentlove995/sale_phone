package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;

/**
 * @author Ly Quoc Trong
 */
public interface UsersService {
    ResponseBuilder getAllUsers();

    ResponseBuilder getUsersById(Long id);

    ResponseBuilder createUsers(String name);

    ResponseBuilder updateUsers(Long id, String name);

    ResponseBuilder deleteUsers(Long id);
}

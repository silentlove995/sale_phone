package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.service.UsersService;
import org.springframework.stereotype.Service;

/**
 * @author Ly Quoc Trong
 */
@Service
public class UserServiceImpl implements UsersService {
    @Override
    public ResponseBuilder getAllUsers() {
        return null;
    }

    @Override
    public ResponseBuilder getUsersById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder createUsers(String name) {
        return null;
    }

    @Override
    public ResponseBuilder updateUsers(Long id, String name) {
        return null;
    }

    @Override
    public ResponseBuilder deleteUsers(Long id) {
        return null;
    }
}

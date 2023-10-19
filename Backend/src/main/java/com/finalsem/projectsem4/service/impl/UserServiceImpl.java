package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.UsersDTO;
import com.finalsem.projectsem4.service.UsersService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class UserServiceImpl implements UsersService {
    @Override
    public ResponseBuilder<List<UsersDTO>> getAllUsers() {
        return null;
    }

    @Override
    public ResponseBuilder<UsersDTO> getUsersById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<UsersDTO> createUsers(UsersDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<UsersDTO> updateUsers(UsersDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<UsersDTO> deleteUsers(Long id) {
        return null;
    }
}

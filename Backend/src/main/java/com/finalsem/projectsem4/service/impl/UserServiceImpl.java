package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.UsersDTO;
import com.finalsem.projectsem4.entity.Users;
import com.finalsem.projectsem4.repository.UsersRepository;
import com.finalsem.projectsem4.service.UsersService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class UserServiceImpl implements UsersService {

    private final UsersRepository usersRepository;

    public UserServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public ResponseBuilder<List<UsersDTO>> getAllUsers() {
        return null;
    }

    @Override
    public ResponseBuilder<UsersDTO> getUsersById(Long id) {
        Users users = usersRepository.getReferenceById(id);
        UsersDTO usersDTO;
        ModelMapper modelMapper = new ModelMapper();
        usersDTO = modelMapper.map(users, UsersDTO.class);
        return new ResponseBuilder<>("00", "Success", usersDTO);
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
        try {
            usersRepository.deleteById(id);
            return new ResponseBuilder<>("00", "Success");
        } catch (Exception e) {
            return new ResponseBuilder<>("99", "Error");
        }
    }
}

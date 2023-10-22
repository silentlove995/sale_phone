package com.finalsem.projectsem4.controller;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.UsersDTO;
import com.finalsem.projectsem4.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class UserController {
    private final UsersService userService;

    public UserController(UsersService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    ResponseEntity<?> getAllUsers() {
        ResponseBuilder<List<UsersDTO>> resp = userService.getAllUsers();
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    ResponseEntity<?> getUserById(@PathVariable Long id) {
        ResponseBuilder<UsersDTO> resp = userService.getUsersById(id);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @PostMapping("/add")
    ResponseEntity<?> addUser(@RequestBody UsersDTO usersDTO) {
        ResponseBuilder<UsersDTO> resp = userService.createUsers(usersDTO);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @PutMapping("/update")
    ResponseEntity<?> updateUser(@RequestBody UsersDTO usersDTO) {
        ResponseBuilder<UsersDTO> resp = userService.updateUsers(usersDTO);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    ResponseEntity<?> deleteUser(@PathVariable Long id) {
        ResponseBuilder resp = userService.deleteUsers(id);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }
}

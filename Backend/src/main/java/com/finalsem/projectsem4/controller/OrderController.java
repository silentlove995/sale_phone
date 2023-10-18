package com.finalsem.projectsem4.controller;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.OrdersDTO;
import com.finalsem.projectsem4.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/orders")
public class OrderController{

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/all")
    ResponseEntity<?> getAllOrders() {
        ResponseBuilder<List<OrdersDTO>> resp = orderService.getAllOrder();
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }
}

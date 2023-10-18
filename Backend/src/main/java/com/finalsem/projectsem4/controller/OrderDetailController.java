package com.finalsem.projectsem4.controller;

import com.finalsem.projectsem4.dto.OrderDetailsDTO;
import com.finalsem.projectsem4.service.OrderDetailsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author Ly Quoc Trong
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/order-details")
public class OrderDetailController {
    private final OrderDetailsService orderDetailsService;

    public OrderDetailController(OrderDetailsService orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }

}

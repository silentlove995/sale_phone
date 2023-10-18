package com.finalsem.projectsem4.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.OrderDetailsDTO;
import com.finalsem.projectsem4.entity.OrderDetails;
import com.finalsem.projectsem4.repository.OrderDetailsRepository;
import com.finalsem.projectsem4.service.OrderDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {
    private final OrderDetailsRepository orderDetailsRepository;

    public OrderDetailsServiceImpl(OrderDetailsRepository orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }

    @Override
    public ResponseBuilder getAllOrderDetails() {
        List<OrderDetails> orderItems = orderDetailsRepository.findAll();
        List<OrderDetailsDTO> orderDetailsDTOS = orderItems.stream().map(orderItem -> {
            OrderDetailsDTO orderDetailsDTO;
            ObjectMapper mapper = new ObjectMapper();
            orderDetailsDTO = mapper.convertValue(orderItem, OrderDetailsDTO.class);
            return orderDetailsDTO;
        }).collect(java.util.stream.Collectors.toList());
        return new ResponseBuilder<>("00", "success", orderDetailsDTOS);
    }

    @Override
    public ResponseBuilder addOrderDetails(OrderDetailsDTO orderDetailsDTO) {
        OrderDetails orderDetails = new OrderDetails();
        ObjectMapper mapper = new ObjectMapper();
        orderDetails = mapper.convertValue(orderDetailsDTO, OrderDetails.class);
        orderDetailsRepository.save(orderDetails);
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder updateOrderDetails(OrderDetailsDTO orderDetailsDTO) {
        OrderDetails orderDetails = orderDetailsRepository.getReferenceById(orderDetailsDTO.getId());
        ObjectMapper mapper = new ObjectMapper();
        orderDetails = mapper.convertValue(orderDetailsDTO, OrderDetails.class);
        orderDetailsRepository.save(orderDetails);
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder deleteOrderDetails(OrderDetailsDTO orderDetailsDTO) {
        OrderDetails orderDetails = orderDetailsRepository.getReferenceById(orderDetailsDTO.getId());
        orderDetailsRepository.delete(orderDetails);
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder getOrderDetailsByOrderId(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder getOrderDetailsByProductId(Long id) {
        return null;
    }
}

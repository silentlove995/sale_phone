package com.finalsem.projectsem4.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.OrdersDTO;
import com.finalsem.projectsem4.entity.Orders;
import com.finalsem.projectsem4.repository.OrderRepository;
import com.finalsem.projectsem4.service.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public ResponseBuilder<List<OrdersDTO>>  getAllOrder() {
        List<Orders> orders = orderRepository.findAll();
        List<OrdersDTO> ordersDTOS = orders.stream().map(order -> {
            OrdersDTO ordersDTO;
            ObjectMapper mapper = new ObjectMapper();
            ordersDTO = mapper.convertValue(order, OrdersDTO.class);
            return ordersDTO;
        }).collect(java.util.stream.Collectors.toList());
        return new ResponseBuilder<List<OrdersDTO>>("00", "success", ordersDTOS);
    }

    @Override
    public ResponseBuilder<OrdersDTO>  addOrder(OrdersDTO ordersDTO) {
        Orders orders = new Orders();
        ObjectMapper mapper = new ObjectMapper();
        orders = mapper.convertValue(ordersDTO, Orders.class);
        orderRepository.save(orders);
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder<OrdersDTO>  updateOrder(OrdersDTO ordersDTO) {
        Orders orders = orderRepository.getReferenceById(ordersDTO.getId());
        ObjectMapper mapper = new ObjectMapper();
        orders = mapper.convertValue(ordersDTO, Orders.class);
        orderRepository.save(orders);
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder deleteOrder(Long id) {
        Orders orders = orderRepository.getReferenceById(id);
        orderRepository.delete(orders);
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder<OrdersDTO>  getOrderById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<OrdersDTO>>  getOrderByUserId(Long id) {
        return null;
    }
}

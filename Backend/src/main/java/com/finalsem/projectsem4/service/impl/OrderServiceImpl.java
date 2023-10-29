package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.OrdersDTO;
import com.finalsem.projectsem4.entity.Orders;
import com.finalsem.projectsem4.repository.OrderRepository;
import com.finalsem.projectsem4.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
            ModelMapper mapper = new ModelMapper();
            ordersDTO = mapper.map(order, OrdersDTO.class);
            return ordersDTO;
        }).collect(Collectors.toList());
        return new ResponseBuilder<List<OrdersDTO>>("00", "success", ordersDTOS);
    }

    @Override
    public ResponseBuilder<OrdersDTO>  addOrder(OrdersDTO ordersDTO) {
        try {
            Orders orders = new Orders();
            ModelMapper mapper = new ModelMapper();
            orders = mapper.map(ordersDTO, Orders.class);
            orderRepository.save(orders);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("01", e.toString());
        }
    }

    @Override
    public ResponseBuilder<OrdersDTO>  updateOrder(OrdersDTO ordersDTO) {
        try {
            Orders orders = orderRepository.getReferenceById(ordersDTO.getId());
            ModelMapper mapper = new ModelMapper();
            orders = mapper.map(ordersDTO, Orders.class);
            orderRepository.save(orders);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("01", e.toString());
        }
    }

    @Override
    public ResponseBuilder deleteOrder(Long id) {
        try {
            orderRepository.deleteById(id);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("99", "fail");
        }
    }

    @Override
    public ResponseBuilder<OrdersDTO>  getOrderById(Long id) {
        Orders orders = orderRepository.getReferenceById(id);
        ModelMapper mapper = new ModelMapper();
        OrdersDTO dto = mapper.map(orders, OrdersDTO.class);
        return new ResponseBuilder<>("00", "success", dto);
    }

    @Override
    public ResponseBuilder<List<OrdersDTO>>  getOrderByUserId(Long id) {
        List<Orders> orders = orderRepository.findAllByUsersId(id);
        List<OrdersDTO> ordersDTOS = orders.stream().map(order -> {
            OrdersDTO ordersDTO;
            ModelMapper mapper = new ModelMapper();
            ordersDTO = mapper.map(order, OrdersDTO.class);
            return ordersDTO;
        }).collect(java.util.stream.Collectors.toList());
        return new ResponseBuilder<>("00", "success", ordersDTOS);
    }
}

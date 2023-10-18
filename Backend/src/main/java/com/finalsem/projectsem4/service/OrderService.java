package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.OrdersDTO;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
public interface OrderService {

    ResponseBuilder<List<OrdersDTO>>  getAllOrder();

    ResponseBuilder<OrdersDTO>  addOrder(OrdersDTO ordersDTO);

    ResponseBuilder<OrdersDTO>  updateOrder(OrdersDTO ordersDTO);

    ResponseBuilder<OrdersDTO>  deleteOrder(OrdersDTO ordersDTO);

    ResponseBuilder<OrdersDTO>  getOrderById(Long id);

    ResponseBuilder<OrdersDTO>  getOrderByUserId(Long id);
}

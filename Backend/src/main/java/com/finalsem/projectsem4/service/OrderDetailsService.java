package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.OrderDetailsDTO;

/**
 * @author Ly Quoc Trong
 */
public interface OrderDetailsService {

    ResponseBuilder getAllOrderDetails();
    ResponseBuilder addOrderDetails(OrderDetailsDTO orderDetailsDTO);

    ResponseBuilder updateOrderDetails(OrderDetailsDTO orderDetailsDTO);

    ResponseBuilder deleteOrderDetails(OrderDetailsDTO orderDetailsDTO);

    ResponseBuilder getOrderDetailsByOrderId(Long id);

    ResponseBuilder getOrderDetailsByProductId(Long id);

}

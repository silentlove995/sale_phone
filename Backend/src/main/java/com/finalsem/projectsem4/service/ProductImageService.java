package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;

/**
 * @author Ly Quoc Trong
 */
public interface ProductImageService {
    ResponseBuilder getAllProductImage();

    ResponseBuilder getProductImageById(Long id);

    ResponseBuilder createProductImage(String name);

    ResponseBuilder updateProductImage(Long id, String name);

    ResponseBuilder deleteProductImage(Long id);

    ResponseBuilder getProductImageByProductId(Long id);
}

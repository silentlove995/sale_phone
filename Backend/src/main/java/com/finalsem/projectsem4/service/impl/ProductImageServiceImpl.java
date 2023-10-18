package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.service.ProductImageService;
import org.springframework.stereotype.Service;

/**
 * @author Ly Quoc Trong
 */
@Service
public class ProductImageServiceImpl implements ProductImageService {
    @Override
    public ResponseBuilder getAllProductImage() {
        return null;
    }

    @Override
    public ResponseBuilder getProductImageById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder createProductImage(String name) {
        return null;
    }

    @Override
    public ResponseBuilder updateProductImage(Long id, String name) {
        return null;
    }

    @Override
    public ResponseBuilder deleteProductImage(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder getProductImageByProductId(Long id) {
        return null;
    }
}

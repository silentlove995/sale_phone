package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.ProductImagesDTO;
import com.finalsem.projectsem4.service.ProductImageService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class ProductImageServiceImpl implements ProductImageService {
    @Override
    public ResponseBuilder<List<ProductImagesDTO>> getAllProductImage() {
        return null;
    }

    @Override
    public ResponseBuilder<ProductImagesDTO> getProductImageById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<ProductImagesDTO> addProductImage(ProductImagesDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<ProductImagesDTO> updateProductImage(ProductImagesDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder deleteProductImage(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<ProductImagesDTO>> getProductImageByProductId(Long id) {
        return null;
    }
}

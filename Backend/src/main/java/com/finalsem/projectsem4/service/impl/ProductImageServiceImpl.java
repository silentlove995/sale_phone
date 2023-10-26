package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.ProductImagesDTO;
import com.finalsem.projectsem4.entity.ProductImages;
import com.finalsem.projectsem4.repository.ProductImagesRepository;
import com.finalsem.projectsem4.service.ProductImageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class ProductImageServiceImpl implements ProductImageService {

    @Autowired
    private ProductImagesRepository productImageRepository;
    @Override
    public ResponseBuilder<List<ProductImagesDTO>> getAllProductImage() {
        List<ProductImages> productImages = productImageRepository.findAll();
        List<ProductImagesDTO> productImagesDTOS = productImages.stream().map(productImage -> {
            ProductImagesDTO productImagesDTO;
            ModelMapper mapper = new ModelMapper();
            productImagesDTO = mapper.map(productImage, ProductImagesDTO.class);
            return productImagesDTO;
        }).collect(java.util.stream.Collectors.toList());
        return new ResponseBuilder<>("00", "success", productImagesDTOS);
    }

    @Override
    public ResponseBuilder<ProductImagesDTO> getProductImageById(Long id) {
        ProductImages productImages = productImageRepository.getReferenceById(id);
        ProductImagesDTO productImagesDTO;
        ModelMapper mapper = new ModelMapper();
        productImagesDTO = mapper.map(productImages, ProductImagesDTO.class);
        return new ResponseBuilder<>("00", "success", productImagesDTO);
    }

    @Override
    public ResponseBuilder<ProductImagesDTO> addProductImage(ProductImagesDTO dto) {
        try {
            ProductImages productImages = new ProductImages();
            ModelMapper mapper = new ModelMapper();
            productImages = mapper.map(dto, ProductImages.class);
            productImageRepository.save(productImages);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("99", "fail");
        }
    }

    @Override
    public ResponseBuilder<ProductImagesDTO> updateProductImage(Long id, ProductImagesDTO dto) {
        try {
            ProductImages productImages = productImageRepository.getReferenceById(id);
            ModelMapper mapper = new ModelMapper();
            productImages = mapper.map(dto, ProductImages.class);
            productImageRepository.save(productImages);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("99", "fail");
        }
    }

    @Override
    public ResponseBuilder deleteProductImage(Long id) {
        try {
            ProductImages productImages = productImageRepository.getReferenceById(id);
            productImageRepository.delete(productImages);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("99", "fail");
        }
    }

    @Override
    public ResponseBuilder<List<ProductImagesDTO>> getProductImageByProductId(Long id) {
        List<ProductImages> productImages = productImageRepository.findAllByProductId(id);
        List<ProductImagesDTO> productImagesDTOS = productImages.stream().map(productImage -> {
            ProductImagesDTO productImagesDTO;
            ModelMapper mapper = new ModelMapper();
            productImagesDTO = mapper.map(productImage, ProductImagesDTO.class);
            return productImagesDTO;
        }).collect(java.util.stream.Collectors.toList());
        return new ResponseBuilder<>("00", "success", productImagesDTOS);
    }
}

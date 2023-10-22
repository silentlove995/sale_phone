package com.finalsem.projectsem4.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.ProductDTO;
import com.finalsem.projectsem4.entity.Products;
import com.finalsem.projectsem4.repository.ProductRepository;
import com.finalsem.projectsem4.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author Ly Quoc Trong
 */
@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ResponseBuilder<List<ProductDTO>> getAllProduct() {
        List<Products> products = productRepository.findAll();
        List<ProductDTO> productDTOS = new ArrayList<>();
        ModelMapper modelMapper = new ModelMapper();
        for (Products product : products) {
            ProductDTO productDTO = modelMapper.map(product, ProductDTO.class);
            productDTOS.add(productDTO);
        }
        return new ResponseBuilder<>("00", "success", productDTOS);
    }

    @Override
    public ResponseBuilder<ProductDTO> addProduct(ProductDTO productDTO) {
        Products products;
        ObjectMapper mapper = new ObjectMapper();
        products = mapper.convertValue(productDTO, Products.class);
        productRepository.save(products);
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder<ProductDTO> updateProduct(ProductDTO productDTO) {
        Products product = productRepository.getReferenceById(productDTO.getId());
        ObjectMapper mapper = new ObjectMapper();
        product = mapper.convertValue(productDTO, Products.class);
        productRepository.save(product);
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder deleteProduct(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<ProductDTO> getProductById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<ProductDTO>> getProductByCategoryId(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<ProductDTO>> getProductByBrandId(Long id) {
        return null;
    }

}

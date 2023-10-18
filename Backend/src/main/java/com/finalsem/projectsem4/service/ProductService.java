package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.ProductDTO;
import com.finalsem.projectsem4.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface ProductService {

    ResponseBuilder getAllProduct();

    ResponseBuilder addProduct(ProductDTO productDTO);

    ResponseBuilder updateProduct(ProductDTO productDTO);

    ResponseBuilder deleteProduct(Long id);

    ResponseBuilder getProductById(Long id);

    ResponseBuilder getProductByCategory(Long id);

    ResponseBuilder getProductByBrand(Long id);

}

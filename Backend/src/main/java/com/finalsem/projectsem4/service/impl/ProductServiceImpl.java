package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.ProductDTO;
import com.finalsem.projectsem4.dto.ProductImagesDTO;
import com.finalsem.projectsem4.entity.ProductImages;
import com.finalsem.projectsem4.entity.Products;
import com.finalsem.projectsem4.repository.ProductImagesRepository;
import com.finalsem.projectsem4.repository.ProductRepository;
import com.finalsem.projectsem4.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author Ly Quoc Trong
 */
@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductImagesRepository productImageRepository;

    public ProductServiceImpl(ProductRepository productRepository, ProductImagesRepository productImageRepository) {
        this.productRepository = productRepository;
        this.productImageRepository = productImageRepository;
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
        ModelMapper mapper = new ModelMapper();
        products = mapper.map(productDTO, Products.class);
        productRepository.save(products);
        Long productId = products.getId(); // Assuming there's a getId() method in Products
        // Associate the product ID with the product images
        for (ProductImagesDTO imageDTO : productDTO.getPictures()) {
            ProductImages productImages = new ProductImages();
            productImages = mapper.map(imageDTO, ProductImages.class);
            productImages.setProductId(productId); // Set the product ID
            productImageRepository.save(productImages);
        }
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder<ProductDTO> updateProduct(Long id, ProductDTO productDTO) {
        Products product = productRepository.getReferenceById(id);
        ModelMapper mapper = new ModelMapper();
        product = mapper.map(productDTO, Products.class);
        productRepository.save(product);
        for (ProductImagesDTO imageDTO : productDTO.getPictures()) {
            ProductImages productImages =  productImageRepository.getReferenceById(imageDTO.getId());
            productImages = mapper.map(imageDTO, ProductImages.class);
            productImages.setProductId(id); // Set the product ID
            productImageRepository.save(productImages);
        }
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder deleteProduct(Long id) {
        try {
            Products product = productRepository.getReferenceById(id);
            ProductDTO productDTO;
            ModelMapper mapper = new ModelMapper();
            productDTO = mapper.map(product, ProductDTO.class);
            for (ProductImagesDTO imageDTO : productDTO.getPictures()) {
                productImageRepository.deleteById(imageDTO.getId());
            }
            productRepository.deleteById(id);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("99", "fail");
        }
    }

    @Override
    public ResponseBuilder<ProductDTO> getProductById(Long id) {
        Products product = productRepository.getReferenceById(id);
        ProductDTO productDTO;
        ModelMapper mapper = new ModelMapper();
        productDTO = mapper.map(product, ProductDTO.class);
        return new ResponseBuilder<>("00", "success", productDTO);
    }

    @Override
    public ResponseBuilder<List<ProductDTO>> getProductByCategoryId(Long id) {
        List<Products> products = productRepository.getAllByCategoryId(id);
        List<ProductDTO> productDTOs = products.stream().map(product -> {
            ModelMapper mapper = new ModelMapper();
            return mapper.map(product, ProductDTO.class);
        }).collect(Collectors.toList());
        return new ResponseBuilder<>("00", "success", productDTOs);
    }

    @Override
    public ResponseBuilder<List<ProductDTO>> getProductByBrandId(Long id) {
        List<Products> products = productRepository.getAllByBrandId(id);
        List<ProductDTO> productDTOs = products.stream().map(product -> {
            ModelMapper mapper = new ModelMapper();
            return mapper.map(product, ProductDTO.class);
        }).collect(Collectors.toList());
        return new ResponseBuilder<>("00", "success", productDTOs);
    }

}

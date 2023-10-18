package com.finalsem.projectsem4.controller;

import com.finalsem.projectsem4.dto.ProductDTO;
import com.finalsem.projectsem4.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/products")
public class ProductsController {

    private final ProductService productService;

    public ProductsController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/get-all")
    public ResponseEntity<?> getAllProducts() {
        return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO) {
        return new ResponseEntity<>(productService.addProduct(productDTO), HttpStatus.OK);
    }

    @PutMapping("/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO) {
        return new ResponseEntity<>(productService.updateProduct(productDTO), HttpStatus.OK);
    }

//    @PutMapping("/delete")
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> deleteProduct(@RequestBody ProductDTO productDTO) {
//        return new ResponseEntity<>(productService.deleteProduct(productDTO), HttpStatus.OK);
//    }

}

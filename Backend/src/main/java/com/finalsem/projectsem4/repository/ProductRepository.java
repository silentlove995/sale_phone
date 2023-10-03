package com.finalsem.projectsem4.repository;

import com.finalsem.projectsem4.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Products, Long> {
    // write query to find product by id
    Products findById(long id);
    // write query to find product by name
    Products findByName(String name);
    // write query to find product by price
    Products findByOriginalPrice(String price);

}

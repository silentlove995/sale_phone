package com.finalsem.projectsem4.repository;

import com.finalsem.projectsem4.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Products, Long> {
    List<Products> getAllByCategoryId(Long categoryId);

    List<Products> getAllByBrandId(Long brandsId);
}

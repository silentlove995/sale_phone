package com.finalsem.projectsem4.repository;

import com.finalsem.projectsem4.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Products, Long> {
    Products findById(long id);
    Products findByName(String name);
    Products findByOriginalPrice(String price);

//    void delete(Optional<Products> product);

//    List<Products> findAllByCategoryId(Long category_id);

//    List<Products> findAllByBrandAndCategoryId(Brands brand, Long category_id);

//    List<Products> findAllByOderItemId(Long order_items_id);
}

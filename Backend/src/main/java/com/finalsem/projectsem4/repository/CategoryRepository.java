package com.finalsem.projectsem4.repository;

import com.finalsem.projectsem4.entity.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Ly Quoc Trong
 */
@Repository
public interface CategoryRepository extends JpaRepository<Categories, Long> {
}

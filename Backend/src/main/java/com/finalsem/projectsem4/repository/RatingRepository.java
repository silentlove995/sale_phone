package com.finalsem.projectsem4.repository;

import com.finalsem.projectsem4.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> getRatingByProductId(Long id);

    List<Rating> getRatingByUserId(Long id);

    List<Rating> getRatingByUserIdAndProductId(Long userId, Long productId);
}

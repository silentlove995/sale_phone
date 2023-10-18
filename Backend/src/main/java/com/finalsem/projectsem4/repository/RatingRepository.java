package com.finalsem.projectsem4.repository;

import com.finalsem.projectsem4.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Ly Quoc Trong
 */
@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
}

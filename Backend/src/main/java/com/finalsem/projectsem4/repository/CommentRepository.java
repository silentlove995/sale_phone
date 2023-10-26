package com.finalsem.projectsem4.repository;

import com.finalsem.projectsem4.entity.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Repository
public interface CommentRepository extends JpaRepository<Comments, Long> {
    List<Comments> getAllByUser(Long userId);

    List<Comments> getAllByProduct(Long productId);

    List<Comments> getAllByUserAndProduct(Long userId, Long productId);
}

package com.finalsem.projectsem4.repository;

import com.finalsem.projectsem4.entity.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Ly Quoc Trong
 */
@Repository
public interface CommentRepository extends JpaRepository<Comments, Long> {
}

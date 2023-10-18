package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.CommentsDTO;

/**
 * @author Ly Quoc Trong
 */
public interface CommentService {
    ResponseBuilder<CommentsDTO> getAllComment();

    ResponseBuilder<CommentsDTO> getCommentById(Long id);

    ResponseBuilder<CommentsDTO> createComment(CommentsDTO dto);

    ResponseBuilder<CommentsDTO> updateComment(Long id, CommentsDTO dto);

    ResponseBuilder<CommentsDTO> deleteComment(Long id);

    ResponseBuilder<CommentsDTO> getCommentByUserId(Long id);

    ResponseBuilder<CommentsDTO> getCommentByProductId(Long id);

    ResponseBuilder<CommentsDTO> getCommentByUserIdAndProductId(Long userId, Long productId);
}

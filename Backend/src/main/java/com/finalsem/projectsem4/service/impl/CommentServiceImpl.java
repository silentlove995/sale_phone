package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.CommentsDTO;
import com.finalsem.projectsem4.service.CommentService;
import org.springframework.stereotype.Service;

/**
 * @author Ly Quoc Trong
 */
@Service
public class CommentServiceImpl implements CommentService {
    @Override
    public ResponseBuilder<CommentsDTO> getAllComment() {
        return null;
    }

    @Override
    public ResponseBuilder<CommentsDTO> getCommentById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<CommentsDTO> createComment(CommentsDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<CommentsDTO> updateComment(Long id, CommentsDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<CommentsDTO> deleteComment(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<CommentsDTO> getCommentByUserId(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<CommentsDTO> getCommentByProductId(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<CommentsDTO> getCommentByUserIdAndProductId(Long userId, Long productId) {
        return null;
    }
}

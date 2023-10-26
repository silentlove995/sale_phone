package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.CommentsDTO;
import com.finalsem.projectsem4.entity.Comments;
import com.finalsem.projectsem4.repository.CommentRepository;
import com.finalsem.projectsem4.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Ly Quoc Trong
 */
@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository repository;
    @Override
    public ResponseBuilder<List<CommentsDTO>> getAllComment() {
        List<Comments> comments = repository.findAll();
        List<CommentsDTO> result = comments.stream().map( comment -> {
            CommentsDTO dto;
            ModelMapper mapper = new ModelMapper();
            dto = mapper.map(comment, CommentsDTO.class);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseBuilder<>("00", "success", result);
    }

    @Override
    public ResponseBuilder<CommentsDTO> getCommentById(Long id) {
        Comments comments = repository.findById(id).orElse(null);
        CommentsDTO dto;
        ModelMapper mapper = new ModelMapper();
        dto = mapper.map(comments, CommentsDTO.class);
        return new ResponseBuilder<>("00", "success", dto);
    }

    @Override
    public ResponseBuilder<CommentsDTO> createComment(CommentsDTO dto) {
        try {
            Comments comments;
            ModelMapper mapper = new ModelMapper();
            comments = mapper.map(dto, Comments.class);
            repository.save(comments);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("01", e.toString());
        }
    }

    @Override
    public ResponseBuilder<CommentsDTO> updateComment(Long id, CommentsDTO dto) {
        try {
            Comments comments = repository.findById(id).orElse(null);
            ModelMapper mapper = new ModelMapper();
            comments = mapper.map(dto, Comments.class);
            repository.save(comments);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("01", e.toString());
        }
    }

    @Override
    public ResponseBuilder deleteComment(Long id) {
        try {
            repository.deleteById(id);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("01", e.toString());
        }
    }

    @Override
    public ResponseBuilder<List<CommentsDTO>> getCommentByUserId(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<CommentsDTO>> getCommentByProductId(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<CommentsDTO>> getCommentByUserIdAndProductId(Long userId, Long productId) {
        return null;
    }
}

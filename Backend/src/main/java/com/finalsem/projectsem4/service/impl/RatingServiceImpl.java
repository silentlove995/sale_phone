package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.RatingsDTO;
import com.finalsem.projectsem4.repository.RatingRepository;
import com.finalsem.projectsem4.service.RatingService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class RatingServiceImpl implements RatingService {

    private final RatingRepository ratingRepository;

    public RatingServiceImpl(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    @Override
    public ResponseBuilder<List<RatingsDTO>> getRatingByProductId(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<RatingsDTO> addRating(RatingsDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<RatingsDTO> updateRating(RatingsDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder deleteRating(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<RatingsDTO>> getRatingById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<RatingsDTO>> getRatingByUserId(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<List<RatingsDTO>> getRatingByUserIdAndProductId(Long userId, Long productId) {
        return null;
    }
}

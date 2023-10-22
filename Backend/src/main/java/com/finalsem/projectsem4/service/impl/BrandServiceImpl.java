package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.BrandsDTO;
import com.finalsem.projectsem4.service.BrandService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class BrandServiceImpl implements BrandService {
    @Override
    public ResponseBuilder<List<BrandsDTO>> getAllBrand() {
        return null;
    }

    @Override
    public ResponseBuilder<BrandsDTO> getBrandById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<BrandsDTO> createBrand(String name) {
        return null;
    }

    @Override
    public ResponseBuilder<BrandsDTO> updateBrand(Long id, String name) {
        return null;
    }

    @Override
    public ResponseBuilder deleteBrand(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<BrandsDTO> getBrandByName(String name) {
        return null;
    }
}

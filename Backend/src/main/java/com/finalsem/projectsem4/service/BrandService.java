package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.BrandsDTO;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
public interface BrandService {
    ResponseBuilder<List<BrandsDTO>> getAllBrand();

    ResponseBuilder<BrandsDTO> getBrandById(Long id);

    ResponseBuilder<BrandsDTO> createBrand(String name);

    ResponseBuilder<BrandsDTO> updateBrand(Long id, String name);

    ResponseBuilder deleteBrand(Long id);

    ResponseBuilder<BrandsDTO> getBrandByName(String name);
}

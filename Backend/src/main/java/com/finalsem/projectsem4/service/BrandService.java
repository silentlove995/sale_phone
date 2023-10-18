package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.BrandsDTO;

/**
 * @author Ly Quoc Trong
 */
public interface BrandService {
    ResponseBuilder<BrandsDTO> getAllBrand();

    ResponseBuilder<BrandsDTO> getBrandById(Long id);

    ResponseBuilder<BrandsDTO> createBrand(String name);

    ResponseBuilder<BrandsDTO> updateBrand(Long id, String name);

    ResponseBuilder<BrandsDTO> deleteBrand(Long id);

    ResponseBuilder<BrandsDTO> getBrandByName(String name);
}

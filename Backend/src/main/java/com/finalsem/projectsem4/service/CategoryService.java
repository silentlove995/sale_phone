package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.CategoryDTO;

/**
 * @author Ly Quoc Trong
 */
public interface CategoryService {
    ResponseBuilder<CategoryDTO> getAllCategory();

    ResponseBuilder<CategoryDTO> getCategoryById(Long id);

    ResponseBuilder<CategoryDTO> createCategory(CategoryDTO dto);

    ResponseBuilder<CategoryDTO> updateCategory(Long id, CategoryDTO dto);

    ResponseBuilder<CategoryDTO> deleteCategory(Long id);

    ResponseBuilder<CategoryDTO> getCategoryByName(String name);
}

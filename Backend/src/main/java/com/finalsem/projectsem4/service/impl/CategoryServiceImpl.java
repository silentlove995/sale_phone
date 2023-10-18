package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.CategoryDTO;
import com.finalsem.projectsem4.service.CategoryService;
import org.springframework.stereotype.Service;

/**
 * @author Ly Quoc Trong
 */
@Service
public class CategoryServiceImpl implements CategoryService {
    @Override
    public ResponseBuilder<CategoryDTO> getAllCategory() {
        return null;
    }

    @Override
    public ResponseBuilder<CategoryDTO> getCategoryById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<CategoryDTO> createCategory(CategoryDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<CategoryDTO> updateCategory(Long id, CategoryDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<CategoryDTO> deleteCategory(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<CategoryDTO> getCategoryByName(String name) {
        return null;
    }
}

package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.CategoryDTO;
import com.finalsem.projectsem4.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class CategoryServiceImpl implements CategoryService {
    @Override
    public ResponseBuilder<List<CategoryDTO>> getAllCategory() {
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
    public ResponseBuilder deleteCategory(Long id) {
        return new ResponseBuilder<>("00", "success");
    }

    @Override
    public ResponseBuilder<CategoryDTO> getCategoryByName(String name) {
        return null;
    }

    @Override
    public ResponseBuilder<List<CategoryDTO>> getCategoryByBrandId(Long id) {
        return null;
    }
}

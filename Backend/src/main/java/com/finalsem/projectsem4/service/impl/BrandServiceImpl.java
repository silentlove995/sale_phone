package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.BrandsDTO;
import com.finalsem.projectsem4.entity.Brands;
import com.finalsem.projectsem4.repository.BrandsRepository;
import com.finalsem.projectsem4.service.BrandService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Ly Quoc Trong
 */
@Service
public class BrandServiceImpl implements BrandService {

    @Autowired
    private BrandsRepository repository;

    @Override
    public ResponseBuilder<List<BrandsDTO>> getAllBrand() {
        List<Brands> brands = repository.findAll();
        List<BrandsDTO> dtoList = brands.stream().map( brand -> {
            BrandsDTO dto;
            ModelMapper mapper = new ModelMapper();
            dto = mapper.map(brand, BrandsDTO.class);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseBuilder<List<BrandsDTO>>("00", "success", dtoList);
    }

    @Override
    public ResponseBuilder<BrandsDTO> getBrandById(Long id) {
        Brands brand = repository.findById(id).orElse(null);
        BrandsDTO brandDTO;
        ModelMapper mapper = new ModelMapper();
        brandDTO = mapper.map(brand, BrandsDTO.class);
        return new ResponseBuilder<BrandsDTO>("00", "success", brandDTO);
    }

    @Override
    public ResponseBuilder<BrandsDTO> createBrand(BrandsDTO dto) {
        try {
            Brands brand;
            ModelMapper mapper = new ModelMapper();
            brand = mapper.map(dto, Brands.class);
            repository.save(brand);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("01", e.toString());
        }

    }

    @Override
    public ResponseBuilder<BrandsDTO> updateBrand(Long id, BrandsDTO dto) {
        try {
            Brands brand = repository.getReferenceById(id);
            ModelMapper mapper = new ModelMapper();
            brand = mapper.map(dto, Brands.class);
            repository.save(brand);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("01", e.toString());
        }
    }

    @Override
    public ResponseBuilder deleteBrand(Long id) {
        try {
            repository.deleteById(id);
            return new ResponseBuilder<>("00", "success");
        } catch (Exception e) {
            return new ResponseBuilder<>("01", e.toString());
        }
    }
}

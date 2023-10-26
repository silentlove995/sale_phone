package com.finalsem.projectsem4.service.impl;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.VouchersDTO;
import com.finalsem.projectsem4.service.VoucherService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@Service
public class VoucherServiceImpl implements VoucherService {
    @Override
    public ResponseBuilder<List<VouchersDTO>> getAllVoucher() {
        return null;
    }

    @Override
    public ResponseBuilder<VouchersDTO> getVoucherById(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<VouchersDTO> addVoucher(VouchersDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder<VouchersDTO> updateVoucher(VouchersDTO dto) {
        return null;
    }

    @Override
    public ResponseBuilder deleteVoucher(Long id) {
        return null;
    }

    @Override
    public ResponseBuilder<VouchersDTO> getVoucherByName(String name) {
        return null;
    }
}

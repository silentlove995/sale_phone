package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.VouchersDTO;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
public interface VoucherService {
    ResponseBuilder<List<VouchersDTO>> getAllVoucher();

    ResponseBuilder<VouchersDTO> getVoucherById(Long id);

    ResponseBuilder<VouchersDTO> addVoucher(VouchersDTO dto);

    ResponseBuilder<VouchersDTO> updateVoucher(VouchersDTO dto);

    ResponseBuilder deleteVoucher(Long id);

    ResponseBuilder<VouchersDTO> getVoucherByName(String name);
}

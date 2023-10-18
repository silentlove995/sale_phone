package com.finalsem.projectsem4.service;

import com.finalsem.projectsem4.common.ResponseBuilder;

/**
 * @author Ly Quoc Trong
 */
public interface VoucherService {
    ResponseBuilder getAllVoucher();

    ResponseBuilder getVoucherById(Long id);

    ResponseBuilder createVoucher(String name);

    ResponseBuilder updateVoucher(Long id, String name);

    ResponseBuilder deleteVoucher(Long id);

    ResponseBuilder getVoucherByName(String name);
}

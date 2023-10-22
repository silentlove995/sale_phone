package com.finalsem.projectsem4.controller;

import com.finalsem.projectsem4.common.ResponseBuilder;
import com.finalsem.projectsem4.dto.VouchersDTO;
import com.finalsem.projectsem4.service.VoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Ly Quoc Trong
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/vouchers")
public class VoucherController {
    private final VoucherService voucherService;

    public VoucherController(VoucherService voucherService) {
        this.voucherService = voucherService;
    }

    @GetMapping("/all")
    ResponseEntity<?> getAllVouchers() {
        ResponseBuilder<List<VouchersDTO>> resp = voucherService.getAllVoucher();
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    ResponseEntity<?> getVoucherById(@PathVariable Long id) {
        ResponseBuilder<VouchersDTO> resp = voucherService.getVoucherById(id);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @GetMapping("/get/name/{name}")
    ResponseEntity<?> getVoucherByName(@PathVariable String name) {
        ResponseBuilder<VouchersDTO> resp = voucherService.getVoucherByName(name);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @PostMapping("/add")
    ResponseEntity<?> addVoucher(@RequestBody VouchersDTO vouchersDTO) {
        ResponseBuilder<VouchersDTO> resp = voucherService.addVoucher(vouchersDTO);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @PutMapping("/update")
    ResponseEntity<?> updateVoucher(@RequestBody VouchersDTO vouchersDTO) {
        ResponseBuilder<VouchersDTO> resp = voucherService.updateVoucher(vouchersDTO);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    ResponseEntity<?> deleteVoucher(@PathVariable Long id) {
        ResponseBuilder resp = voucherService.deleteVoucher(id);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }
}

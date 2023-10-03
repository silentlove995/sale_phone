package com.finalsem.projectsem4.common;

import lombok.Data;

@Data
public class ResponseBuilder<T> {
    private String code;
    private String message;
    private T data;

    public ResponseBuilder(String code, String message) {
        this.code = code;
        this.message = message;
    }
}

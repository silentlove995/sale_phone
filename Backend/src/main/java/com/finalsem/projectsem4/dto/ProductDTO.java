package com.finalsem.projectsem4.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.finalsem.projectsem4.common.enums.Brands;
import com.finalsem.projectsem4.entity.Pictures;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @author silen
 */
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductDTO {
    private String type;
    private String name;
    private String model;
    private String color;
    private String description;
    private Brands brand;
    private String originalPrice;
    private String discount;
    private String salePrice;
    private String screenTech;
    private String resolution;
    private String width;
    private String refreshRate;
    private String brightness;
    private String glassSurface;
    private String cameraResolutionFront;
    private String cameraResolutionBack;
    private String cameraSupportFront;
    private String cameraSupportBack;
    private String cameraFlashFront;
    private String cameraFlashBack;
    private String cameraFeatureFront;
    private String cameraFeatureBack;
    private String os;
    private String cpu;
    private String cpuSpeed;
    private String gpu;
    private String ram;
    private String diskSpace;
    private String availableSpace;
    private String contact;
    private String network;
    private String sim;
    private String wifi;
    private String gps;
    private String bluetooth;
    private String chargingPort;
    private String headset;
    private String otherConnect;
    private String battery;
    private String batteryType;
    private String maxWattageSupport;
    private String batteryTech;
    private String security;
    private String specialFeature;
    private String waterResit;
    private String recorder;
    private String movieSupport;
    private String musicSupport;
    private String designType;
    private String material;
    private String size;
    private String weight;
    private String core;
    private String thread;
    private String cpuMaxSpeed;
    private String cpuCache;
    private String ramType;
    private String ramBus;
    private String maxRamSupport;
    private String hardDisk;
    private String connectPort;
    private String wirelessSupport;
    private String cardReader;
    private String webcam;
    private String keyboardLight;
    private String releaseDate;
    private List<Pictures> pictures;
}

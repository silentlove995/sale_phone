package com.finalsem.projectsem4.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.finalsem.projectsem4.common.enums.Brands;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity

public class Products extends BaseEntity {
    @Column(name = "type") // loai san pham ( dien thoai, laptop, may tinh bang, phu kien)
    private String type;

    @Column(name = "name") // name of product
    private String name;

    @Column(name = "model") // model san pham
    private String model;

    @Column(name="color")
    private String color;

    @Column(name = "description") // mo ta san pham
    private String description;

    @Column(name = "brand") // hang san xuat
    private Brands brand;

    @Column(name = "original_price") // gia goc
    private String originalPrice;

    @Column(name = "discount") // giam gia
    private String discount;

    @Column(name = "sale_price") // gia ban
    private String salePrice;

    @Column(name = "screen_tech") // cong nghe man hinh
    private String screenTech;

    @Column(name = "resolution") // do phan giai
    private String resolution;

    @Column(name = "width") // kich thuoc man hinh
    private String width;

    @Column(name = "refresh_rate") // tan so quet
    private String refreshRate;

    @Column(name = "brightness") // do sang
    private String brightness;

    @Column(name = "glass_surface") // mat kinh cuong luc
    private String glassSurface;

    @Column(name="camera_resolution_front") // do phan giai camera truoc
    private String cameraResolutionFront;

    @Column(name="camera_resolution_back") // do phan giai camera sau
    private String cameraResolutionBack;

    @Column(name="camera_support_front") // ho tro camera truoc
    private String cameraSupportFront;

    @Column(name="camera_support_back") // ho tro camera sau
    private String cameraSupportBack;

    @Column(name="camera_flash_front") // den flash truoc
    private String cameraFlashFront;

    @Column(name="camera_flash_back") // den flash sau
    private String cameraFlashBack;

    @Column(name="camera_feature_front") // tinh nang camera truoc
    private String cameraFeatureFront;

    @Column(name="camera_feature_back") // tinh nang camera sau
    private String cameraFeatureBack;

    @Column(name="os") // he dieu hanh
    private String os;

    @Column(name="cpu") // bo xu ly
    private String cpu;

    @Column(name="cpu_speed") // toc do xu ly cpu
    private String cpuSpeed;

    @Column(name="gpu") // bo xu ly do hoa
    private String gpu;

    @Column(name="ram") // bo nho ram
    private String ram;

    @Column(name="disk_space") // bo nho trong
    private String diskSpace;

    @Column(name="available_space") // bo nho con lai
    private String availableSpace;

    @Column(name="contact") // danh ba
    private String contact;

    @Column(name="network") // mang
    private String network;

    @Column(name="sim") // sim
    private String sim;

    @Column(name="wifi") // cong nghe wifi
    private String wifi;

    @Column(name="gps") // gps
    private String gps;

    @Column(name="bluetooth")
    private String bluetooth;

    @Column(name="charging_port") // cong sac
    private String chargingPort;

    @Column(name="headset") // tai nghe
    private String headset;

    @Column(name="other_connect") // ket noi khac
    private String otherConnect;

    @Column(name="battery") // pin
    private String battery;

    @Column(name="battery_type") // loai pin
    private String batteryType;

    @Column(name="max_wattage_support") // cong suat sac toi da ho tro
    private String maxWattageSupport;

    @Column(name="battery_tech") // cong nghe pin
    private String batteryTech;

    @Column(name="security") // bao mat
    private String security;

    @Column(name="special_feature") // tinh nang dac biet
    private String specialFeature;

    @Column(name="water_resit") // chong nuoc
    private String waterResit;

    @Column(name="recorder") // ghi am
    private String recorder;

    @Column(name="movie_support") // ho tro video
    private String movieSupport;

    @Column(name="music_support") // ho tro nhac
    private String musicSupport;

    @Column(name="design_type") // kieu dang
    private String designType;

    @Column(name="material") // chat lieu
    private String material;

    @Column(name="size") // kich thuoc
    private String size;

    @Column(name="weight") // can nang
    private String weight;

    // additional for laptop

    @Column(name="core") // so nhan
    private String core;

    @Column(name="thread") // so luong luong
    private String thread;

    @Column(name="cpu_max_speed") // toc do toi da
    private String cpuMaxSpeed;

    @Column(name="cpu_cache") // bo nho dem
    private String cpuCache;

    @Column(name="ram_type") // loai ram
    private String ramType;

    @Column(name="ram_bus") // toc do bus ram
    private String ramBus;

    @Column(name="max_ram_support") // ram toi da ho tro
    private String maxRamSupport;

    @Column(name="hard_disk") // o cung
    private String hardDisk;

    @Column(name="connect_port") // cong ket noi
    private String connectPort;

    @Column(name="wireless_support") // ho tro khong day
    private String wirelessSupport;

    @Column(name="card_reader") // khe doc the nho
    private String cardReader;

    @Column(name="webcam") // webcam
    private String webcam;

    @Column(name="keyboard_light") // den ban phim
    private String keyboardLight;

    @Column(name="release_date") // ngay ra mat
    private String releaseDate;

    @OneToMany(mappedBy = "product", cascade = {CascadeType.ALL}, fetch= FetchType.EAGER)
    @JsonManagedReference
    private List<Pictures> pictures;

    @ManyToOne
    @JoinColumn(name = "order_items_id")
    private OrderItems orderItem;
}

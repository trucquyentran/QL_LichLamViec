package com.example.demo.Entity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter

@Document(collection = "lichlamviec")
public class Lich {
    @Id

    private String id;

    private String nguoiDungID;
    private String loaiCvID;
    private LocalDateTime thoiGianBD;
    private  LocalDateTime thoiGianKT;
    private String diaDiem;
    private String noiDung;
    private  String ghiChu;

    public Lich(String id, String nguoiDungID, String loaiCvID, String diaDiem, String noiDung, String ghiChu) {
        this.id = id;
        this.nguoiDungID = nguoiDungID;
        this.loaiCvID = loaiCvID;
        this.diaDiem = diaDiem;
        this.noiDung = noiDung;
        this.ghiChu = ghiChu;

    }

}

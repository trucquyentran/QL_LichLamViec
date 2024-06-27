package com.example.demo.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.xml.crypto.Data;
import java.util.Date;

@Document(collection = "users")
public class User {
    @Id
    private String _id;
    private String hoten;
    private Date ngaysinh;
    private String gioitinh;
    private String sdt;
    private String diachi;
    private String email;

    public User(String _id, String hoten, Date ngaysinh, String gioitinh, String sdt, String diachi, String email) {
        this._id = _id;
        this.hoten = hoten;
        this.ngaysinh = ngaysinh;
        this.gioitinh = gioitinh;
        this.sdt = sdt;
        this.diachi = diachi;
        this.email = email;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getHoten() {
        return hoten;
    }

    public void setHoten(String hoten) {
        this.hoten = hoten;
    }

    public Date getNgaysinh() {
        return ngaysinh;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNgaysinh(Date ngaysinh) {
        this.ngaysinh = ngaysinh;
    }

    public String getGioitinh() {
        return gioitinh;
    }

    public void setGioitinh(String gioitinh) {
        this.gioitinh = gioitinh;
    }

    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    public String getDiachi() {
        return diachi;
    }

    public void setDiachi(String diachi) {
        this.diachi = diachi;
    }

    @Override
    public String toString() {
        return "User{" +
                "_id='" + _id + '\'' +
                ", hoten='" + hoten + '\'' +
                ", ngaysinh=" + ngaysinh +
                ", gioitinh='" + gioitinh + '\'' +
                ", sdt='" + sdt + '\'' +
                ", diachi='" + diachi + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

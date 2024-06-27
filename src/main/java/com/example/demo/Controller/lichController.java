package com.example.demo.Controller;

import com.example.demo.Entity.Lich;
import com.example.demo.Service.lichService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/lich")

public class lichController {
    @Autowired
    private lichService lichservice;

    @GetMapping("/")
    public Iterable<Lich> danhsach() {
        return lichservice.getLich();
    }

    @PostMapping("/them")
    public String them(@RequestBody Lich lich) {
        lichservice.addLich(lich);
        return "Thêm thành công!";
    }

    @GetMapping("/{id}")
    public Lich getLichByID(@PathVariable String id) {
        return lichservice.getLichById(id);
    }

    @DeleteMapping("/xoa/{id}")
    private void xoaLich(@PathVariable("id") String id) {
        lichservice.deleteLich(id);
    }

    @PutMapping("/sua/{id}")
    public Lich suaLich(@RequestBody Lich lich, @PathVariable String id) {
        lich.setId(id);
        lichservice.updateLich(lich);
        return  lich;
    }
}
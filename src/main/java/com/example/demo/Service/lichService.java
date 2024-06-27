package com.example.demo.Service;

import com.example.demo.Entity.Lich;
import com.example.demo.Repo.lichRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class lichService {
@Autowired
    private lichRepo lichrepo;
    public void addLich(Lich lich) {
        lichrepo.save(lich);
    }
    public Iterable<Lich> getLich() {
        return lichrepo.findAll();
    }

    public void deleteLich(String id) {
        lichrepo.deleteById(id);
    }
    public Lich getLichById(String id) {
        return lichrepo.findById(id).get();
    }
    public void updateLich(Lich lich) {
        lichrepo.save(lich);
    }
}

package com.example.demo.Service;

import com.example.demo.Entity.User;
import com.example.demo.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;

    public void saveorUpdate(User users) {
        repo.save(users);
    }

    public Iterable<User> listAll() {
        return this.repo.findAll();
    }

    public void deleteUser(String id) {
        repo.deleteById(id);
    }

    public User getUserByID(String userid) {
        return repo.findById(userid).get();
    }
}

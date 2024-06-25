package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/user")

public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping(value = "/save")
    public String saveUsser(@RequestBody User user)
    {
        UserService.saveorUpdate(users);
        return users.get_id();
    }
}

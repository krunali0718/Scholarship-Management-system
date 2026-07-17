package com.krunali.scholarhub_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.krunali.scholarhub_backend.dto.AuthResponse;
import com.krunali.scholarhub_backend.dto.LoginRequest;
import com.krunali.scholarhub_backend.dto.RegisterRequest;
import com.krunali.scholarhub_backend.entity.User;
import com.krunali.scholarhub_backend.service.AuthService;
import com.krunali.scholarhub_backend.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:5173/")
public class AuthController {

    @Autowired
    private UserService service;

    @Autowired
    private AuthService authService;


    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequest request) {

        return service.register(request);

    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request) {

        return authService.login(request);

    }

    @GetMapping("/getRegisteredUsers")
    public List<User> registeredUsers() {

        return service.registeredUsers();

    }

    @GetMapping("/check")
    public String check() {

        return "Welcome to ScholarHub Backend";

    }

}

package com.krunali.scholarhub_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.krunali.scholarhub_backend.dto.AuthResponse;
import com.krunali.scholarhub_backend.dto.LoginRequest;
import com.krunali.scholarhub_backend.entity.User;
import com.krunali.scholarhub_backend.repository.UserRepository;
import com.krunali.scholarhub_backend.security.JwtService;

@Service
public class AuthService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtService jwtService;

    @Autowired
    UserRepository userRepository;

    public AuthResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = jwtService.generateToken(user);

        return new AuthResponse(token);
    }
}
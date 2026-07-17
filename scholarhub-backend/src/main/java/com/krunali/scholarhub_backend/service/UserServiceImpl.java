package com.krunali.scholarhub_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.krunali.scholarhub_backend.dto.RegisterRequest;
import com.krunali.scholarhub_backend.entity.User;
import com.krunali.scholarhub_backend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String register(RegisterRequest request) {

        if (repository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already registered";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setPhone(request.getPhone());
        user.setCollege(request.getCollege());
        user.setCourse(request.getCourse());
        user.setCgpa(request.getCgpa());
        user.setFamilyIncome(request.getFamilyIncome());

        // Default role
        user.setRole("STUDENT");

        repository.save(user);

        return "Registration Successful";
    }

    @Override
    public List<User> registeredUsers() {

        return repository.findAll();
    }

}

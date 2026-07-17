package com.krunali.scholarhub_backend.service;

import java.util.List;

import com.krunali.scholarhub_backend.dto.RegisterRequest;
import com.krunali.scholarhub_backend.entity.User;

public interface UserService {

    String register(RegisterRequest request);

    List<User> registeredUsers();

}

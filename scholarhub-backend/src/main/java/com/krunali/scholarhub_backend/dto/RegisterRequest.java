package com.krunali.scholarhub_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RegisterRequest {

    private String name;

    private String email;

    private String password;

    private String phone;

    private String college;

    private String course;

    private Double cgpa;

    private Double familyIncome;

}
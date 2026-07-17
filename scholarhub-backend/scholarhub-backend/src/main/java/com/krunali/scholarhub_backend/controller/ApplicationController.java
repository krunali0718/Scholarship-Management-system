package com.krunali.scholarhub_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.krunali.scholarhub_backend.dto.ApplicationRequest;
import com.krunali.scholarhub_backend.dto.ApplicationResponse;
import com.krunali.scholarhub_backend.service.ApplicationService;

@RestController
@RequestMapping("/application")
@CrossOrigin("http://localhost:5173/")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/apply")
    public String applyForScholarship(
            @RequestBody ApplicationRequest request) {

        return applicationService.applyForScholarship(request);
    }

    @GetMapping("/all")
    public List<ApplicationResponse> getAllApplications() {

        return applicationService.getAllApplications();
    }

    @GetMapping("/student/{studentId}")
    public List<ApplicationResponse> getApplicationsByStudent(
            @PathVariable Long studentId) {

        return applicationService.getApplicationsByStudent(studentId);
    }

    @PutMapping("/approve/{applicationId}")
    public String approveApplication(
            @PathVariable Long applicationId) {

        return applicationService.approveApplication(applicationId);
    }

    @PutMapping("/reject/{applicationId}")
    public String rejectApplication(
            @PathVariable Long applicationId) {

        return applicationService.rejectApplication(applicationId);
    }

    @GetMapping("/check")
    public String check() {
        return "Application Controller Working...";
    }
}
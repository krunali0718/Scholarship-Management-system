package com.krunali.scholarhub_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.krunali.scholarhub_backend.dto.ScholarshipRequest;
import com.krunali.scholarhub_backend.dto.ScholarshipResponse;
import com.krunali.scholarhub_backend.service.ScholarshipService;

@RestController
@RequestMapping("/scholarship")
@CrossOrigin("http://localhost:5173/")
public class ScholarshipController {

    @Autowired
    private ScholarshipService scholarshipService;

    @PostMapping("/create")
    public String createScholarship(
            @RequestBody ScholarshipRequest request) {

        return scholarshipService.createScholarship(request);
    }

    @GetMapping("/all")
    public List<ScholarshipResponse> getAllScholarships() {

        return scholarshipService.getAllScholarships();
    }

    @GetMapping("/{id}")
    public ScholarshipResponse getScholarshipById(
            @PathVariable Long id) {

        return scholarshipService.getScholarshipById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteScholarship(
            @PathVariable Long id) {

        return scholarshipService.deleteScholarship(id);
    }

    @GetMapping("/check")
    public String check() {
        return "Scholarship Controller Working...";
    }
}

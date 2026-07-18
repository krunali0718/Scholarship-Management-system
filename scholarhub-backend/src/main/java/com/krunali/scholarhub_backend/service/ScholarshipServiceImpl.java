package com.krunali.scholarhub_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krunali.scholarhub_backend.dto.ScholarshipRequest;
import com.krunali.scholarhub_backend.dto.ScholarshipResponse;
import com.krunali.scholarhub_backend.entity.Scholarship;
import com.krunali.scholarhub_backend.repository.ScholarshipRepository;

@Service
public class ScholarshipServiceImpl implements ScholarshipService {

    @Autowired
    private ScholarshipRepository repository;

    @Override
    public String createScholarship(ScholarshipRequest request) {

        Scholarship scholarship = new Scholarship();

        scholarship.setTitle(request.getTitle());
        scholarship.setDescription(request.getDescription());
        scholarship.setAmount(request.getAmount());
        scholarship.setEligibility(request.getEligibility());
        scholarship.setLastDate(request.getLastDate());
        scholarship.setCategory(request.getCategory());
        scholarship.setStatus(request.getStatus());

        repository.save(scholarship);

        return "Scholarship Created Successfully";
    }

    @Override
    public List<ScholarshipResponse> getAllScholarships() {

        List<Scholarship> scholarships = repository.findAll();
        List<ScholarshipResponse> response = new ArrayList<>();

        for (Scholarship scholarship : scholarships) {

            ScholarshipResponse dto = new ScholarshipResponse();

            dto.setId(scholarship.getId());
            dto.setTitle(scholarship.getTitle());
            dto.setDescription(scholarship.getDescription());
            dto.setAmount(scholarship.getAmount());
            dto.setEligibility(scholarship.getEligibility());
            dto.setLastDate(scholarship.getLastDate());
            dto.setCategory(scholarship.getCategory());
            dto.setStatus(scholarship.getStatus());

            response.add(dto);
        }

        return response;
    }

    @Override
    public ScholarshipResponse getScholarshipById(Long id) {

        Scholarship scholarship = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Scholarship Not Found"));

        ScholarshipResponse response = new ScholarshipResponse();

        response.setId(scholarship.getId());
        response.setTitle(scholarship.getTitle());
        response.setDescription(scholarship.getDescription());
        response.setAmount(scholarship.getAmount());
        response.setEligibility(scholarship.getEligibility());
        response.setLastDate(scholarship.getLastDate());
        response.setCategory(scholarship.getCategory());
        response.setStatus(scholarship.getStatus());

        return response;
    }

    @Override
    public String deleteScholarship(Long id) {

        repository.deleteById(id);

        return "Scholarship Deleted Successfully";
    }
}
package com.krunali.scholarhub_backend.service;

import java.util.List;

import com.krunali.scholarhub_backend.dto.ScholarshipRequest;
import com.krunali.scholarhub_backend.dto.ScholarshipResponse;

public interface ScholarshipService {

    String createScholarship(ScholarshipRequest request);

    List<ScholarshipResponse> getAllScholarships();

    ScholarshipResponse getScholarshipById(Long id);

    String deleteScholarship(Long id);

}
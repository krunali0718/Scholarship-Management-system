package com.krunali.scholarhub_backend.service;

import java.util.List;

import com.krunali.scholarhub_backend.dto.ApplicationRequest;
import com.krunali.scholarhub_backend.dto.ApplicationResponse;

public interface ApplicationService {

    String applyForScholarship(ApplicationRequest request);

    List<ApplicationResponse> getAllApplications();

    List<ApplicationResponse> getApplicationsByStudent(Long studentId);

    String approveApplication(Long applicationId);

    String rejectApplication(Long applicationId);

}

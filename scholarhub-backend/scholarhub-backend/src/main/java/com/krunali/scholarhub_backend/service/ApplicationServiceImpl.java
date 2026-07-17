package com.krunali.scholarhub_backend.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krunali.scholarhub_backend.dto.ApplicationRequest;
import com.krunali.scholarhub_backend.dto.ApplicationResponse;
import com.krunali.scholarhub_backend.entity.Application;
import com.krunali.scholarhub_backend.entity.Scholarship;
import com.krunali.scholarhub_backend.entity.User;
import com.krunali.scholarhub_backend.repository.ApplicationRepository;
import com.krunali.scholarhub_backend.repository.ScholarshipRepository;
import com.krunali.scholarhub_backend.repository.UserRepository;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScholarshipRepository scholarshipRepository;

    @Override
    public String applyForScholarship(ApplicationRequest request) {

        User student = userRepository.findById(request.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Scholarship scholarship = scholarshipRepository.findById(request.getScholarshipId())
                .orElseThrow(() -> new RuntimeException("Scholarship not found"));

        Application application = new Application();

        application.setStudent(student);
        application.setScholarship(scholarship);
        application.setApplicationDate(LocalDate.now().toString());
        application.setStatus("PENDING");
        application.setRemarks("Application Submitted");

        applicationRepository.save(application);

        return "Application Submitted Successfully";
    }

    @Override
    public List<ApplicationResponse> getAllApplications() {

        List<Application> applications = applicationRepository.findAll();
        List<ApplicationResponse> responses = new ArrayList<>();

        for (Application application : applications) {

            ApplicationResponse response = new ApplicationResponse();

            response.setId(application.getId());
            response.setStudentName(application.getStudent().getName());
            response.setScholarshipTitle(application.getScholarship().getTitle());
            response.setApplicationDate(application.getApplicationDate());
            response.setStatus(application.getStatus());
            response.setRemarks(application.getRemarks());

            responses.add(response);
        }

        return responses;
    }

    @Override
    public List<ApplicationResponse> getApplicationsByStudent(Long studentId) {

        List<Application> applications =
                applicationRepository.findByStudentId(studentId);

        List<ApplicationResponse> responses = new ArrayList<>();

        for (Application application : applications) {

            ApplicationResponse response = new ApplicationResponse();

            response.setId(application.getId());
            response.setStudentName(application.getStudent().getName());
            response.setScholarshipTitle(application.getScholarship().getTitle());
            response.setApplicationDate(application.getApplicationDate());
            response.setStatus(application.getStatus());
            response.setRemarks(application.getRemarks());

            responses.add(response);
        }

        return responses;
    }

    @Override
    public String approveApplication(Long applicationId) {

        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        application.setStatus("APPROVED");
        applicationRepository.save(application);

        return "Application Approved";
    }

    @Override
    public String rejectApplication(Long applicationId) {

        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        application.setStatus("REJECTED");
        applicationRepository.save(application);

        return "Application Rejected";
    }

}
package com.krunali.scholarhub_backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApplicationResponse {

    private Long id;

    private String studentName;

    private String scholarshipTitle;

    private String applicationDate;

    private String status;

    private String remarks;

}
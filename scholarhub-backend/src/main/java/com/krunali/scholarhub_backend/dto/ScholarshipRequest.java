package com.krunali.scholarhub_backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScholarshipRequest {

    private String title;

    private String description;

    private Double amount;

    private String eligibility;

    private String category;

    private String lastDate;

    private String status;

}

package com.krunali.scholarhub_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krunali.scholarhub_backend.entity.Scholarship;

public interface ScholarshipRepository extends JpaRepository<Scholarship, Long> {

}
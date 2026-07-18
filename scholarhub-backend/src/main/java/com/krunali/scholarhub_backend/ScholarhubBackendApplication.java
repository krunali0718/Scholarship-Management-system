package com.krunali.scholarhub_backend;

import com.krunali.scholarhub_backend.entity.User;
import com.krunali.scholarhub_backend.entity.Scholarship;
import com.krunali.scholarhub_backend.repository.UserRepository;
import com.krunali.scholarhub_backend.repository.ScholarshipRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class ScholarhubBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScholarhubBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner initDatabase(UserRepository userRepository, ScholarshipRepository scholarshipRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			if (userRepository.findByEmail("admin@gmail.com").isEmpty()) {
				User admin = new User();
				admin.setName("System Admin");
				admin.setEmail("admin@gmail.com");
				admin.setPassword(passwordEncoder.encode("admin"));
				admin.setRole("ADMIN");
				userRepository.save(admin);
				System.out.println("Default admin user created: admin@gmail.com / admin");
			}

			if (userRepository.findByEmail("student@gmail.com").isEmpty()) {
				User student = new User();
				student.setName("John Student");
				student.setEmail("student@gmail.com");
				student.setPassword(passwordEncoder.encode("student"));
				student.setRole("STUDENT");
				student.setPhone("1234567890");
				student.setCollege("State University");
				student.setCourse("Computer Science");
				student.setCgpa(8.5);
				student.setFamilyIncome(500000.0);
				userRepository.save(student);
				System.out.println("Default student user created: student@gmail.com / student");
			}

			if (scholarshipRepository.count() == 0) {
				Scholarship scholarship1 = new Scholarship();
				scholarship1.setTitle("National Merit Scholarship");
				scholarship1.setDescription("Awarded to outstanding students who have demonstrated exceptional academic success.");
				scholarship1.setAmount(50000.0);
				scholarship1.setEligibility("CGPA >= 8.5, Family Income < 600,000");
				scholarship1.setCategory("Academic");
				scholarship1.setLastDate("2026-12-31");
				scholarship1.setStatus("ACTIVE");
				scholarshipRepository.save(scholarship1);

				Scholarship scholarship2 = new Scholarship();
				scholarship2.setTitle("Tech Innovators Scholarship");
				scholarship2.setDescription("Supporting undergraduate students studying Computer Science or related fields with innovative projects.");
				scholarship2.setAmount(75000.0);
				scholarship2.setEligibility("Computer Science/IT stream, CGPA >= 8.0");
				scholarship2.setCategory("Technical");
				scholarship2.setLastDate("2026-11-30");
				scholarship2.setStatus("ACTIVE");
				scholarshipRepository.save(scholarship2);

				System.out.println("Default scholarships created.");
			}
		};
	}
}

# 🎓 ScholarHub - Scholarship Management System

ScholarHub is a Full Stack Scholarship Management System developed using **Spring Boot**, **React.js**, **MySQL**, and **JWT Authentication**. The application enables students to explore scholarships, apply online, and track their applications, while administrators can efficiently manage scholarships and review student applications.

---

## 🚀 Features

### 👨‍🎓 Student
- Student Registration
- Secure Login using JWT Authentication
- View Available Scholarships
- View Scholarship Details
- Apply for Scholarships
- Track Application Status
- Personal Dashboard

### 👨‍💼 Admin
- Secure Admin Login
- Create Scholarships
- View All Scholarships
- Delete Scholarships
- View Registered Students
- View All Applications
- Approve/Reject Scholarship Applications

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- Maven

### Database
- MySQL

### Tools
- VS Code
- IntelliJ IDEA
- Postman
- Git
- GitHub

---

## 📂 Project Structure

```
ScholarHub
│
├── scholarhub-backend
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── repository
│   ├── security
│   ├── service
│   └── resources
│
├── scholarhub-frontend
│   ├── components
│   ├── pages
│   ├── service
│   ├── css
│   └── assets
│
└── README.md
```

---

## 🔐 Authentication

- JWT Token Based Authentication
- Spring Security
- Password Encryption using BCrypt
- Role Based Authorization
    - STUDENT
    - ADMIN

---

## 📌 REST APIs

### Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/register` | Register Student |
| POST | `/auth/login` | Login User |
| GET | `/auth/getRegisteredUsers` | View Registered Users |

---

### Scholarship APIs

| Method | Endpoint |
|---------|-----------|
| POST | `/scholarship/create` |
| GET | `/scholarship/all` |
| GET | `/scholarship/{id}` |
| DELETE | `/scholarship/delete/{id}` |

---

### Application APIs

| Method | Endpoint |
|---------|-----------|
| POST | `/application/apply` |
| GET | `/application/all` |
| GET | `/application/student/{studentId}` |
| PUT | `/application/approve/{applicationId}` |
| PUT | `/application/reject/{applicationId}` |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/scholarhub.git
```

---

### Backend Setup

```bash
cd scholarhub-backend
```

Update **application.properties**

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/scholarhub
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

Run Spring Boot

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

### Frontend Setup

```bash
cd scholarhub-frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📸 Project Modules

- Home Page
- Student Registration
- Login
- Dashboard
- Scholarship Listing
- Scholarship Details
- Add Scholarship
- Registered Users
- My Applications
- Admin Dashboard

---

## 🎯 Future Enhancements

- Email Verification
- Forgot Password
- Scholarship Search & Filters
- File Upload for Documents
- Student Profile Management
- Admin Analytics Dashboard
- Notification System
- Responsive Mobile Design

---

## 👨‍💻 Developed By

**Krunali Bachhav**

B.Tech Computer Science & Engineering (Data Science)

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub.
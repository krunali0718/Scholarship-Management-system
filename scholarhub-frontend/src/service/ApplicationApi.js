import api from "./api";

// Apply for scholarship
export function applyScholarship(application) {
    return api.post("/application/apply", application);
}

// Get all applications
export function getAllApplications() {
    return api.get("/application/all");
}

// Get applications of a student
export function getStudentApplications(studentId) {
    return api.get(`/application/student/${studentId}`);
}
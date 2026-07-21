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

// Approve an application (Admin)
export function approveApplication(applicationId) {
    return api.put(`/application/approve/${applicationId}`);
}

// Reject an application (Admin)
export function rejectApplication(applicationId) {
    return api.put(`/application/reject/${applicationId}`);
}
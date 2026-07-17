import api from "./api";

// Get all scholarships
export function getAllScholarships() {
    return api.get("/scholarship/all");
}

// Get scholarship by ID
export function getScholarshipById(id) {
    return api.get(`/scholarship/${id}`);
}

// Create scholarship (Admin)
export function createScholarship(scholarship) {
    return api.post("/scholarship/create", scholarship);
}

// Delete scholarship
export function deleteScholarship(id) {
    return api.delete(`/scholarship/delete/${id}`);
}
const baseURL = "http://localhost:8080/"

// GET - get all courses.
export const getCourses = () => {
    return fetch(baseURL + "courses")
        .then(res => res.json())
};
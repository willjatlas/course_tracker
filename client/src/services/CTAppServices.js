const baseURL = "http://localhost:8080/"

// GET - get all courses.
export const getCourses = () => {
    return fetch(baseURL + "courses")
        .then(res => res.json())
};

// Get - get all customers 
export const getCutomers  = () => {
    return fetch(baseURL + "customers")
        .then(res => res.json())
};

